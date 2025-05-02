import { NextFunction, Request, Response } from "express";
import {
  EventTable,
  NotificationTable,
  NotificationTables,
} from "../../../../types";
import {
  EventQuery,
  DBTable,
  Error,
  Success,
  UserQuery,
  GenerateEmail,
} from "../../../../shared";
import { eventValidator } from "../../../../validators";
import { AddService, GetService, UpdateService } from "../../../../services";
import { isFound, singleMailSender } from "../../../../functions";

export const EventUpdateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const RecordId: number = parseInt(req.params?.Id, 10),
      Data: EventTable = req.body;

    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = eventValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn here
    if (!(await isFound(EventQuery.q002, ["Id"], [Number], [RecordId])).data)
      return res.status(401).json({ data: false, message: Error.m011 }); // check existence
    Data.ScheduleDate = new Date(Data.ScheduleDate);

    const { Id, CreatedBy, DateCreated, ...Filtered } = Data;
    Data.DateUpdated = new Date(Data?.DateUpdated?.toString() ?? "");

    const Fields = Object.keys(Filtered);
    const Types = Object.values(Filtered).map((val) => typeof val);
    const Values = Object.values(Filtered);

    if (
      !(await UpdateService.record(
        RecordId,
        DBTable.t009,
        Fields,
        Types,
        Values,
      ))
    )
      return res.status(401).json({ data: false, message: Error.m002 });

    if (Boolean(Data?.IsValidated ?? false)) {
      // NOTIFY ALL ADVOCATES
      const Advocates: NotificationTable[] = await GetService.byFields(
        UserQuery.q007,
        ["Role"],
        [String],
        ["advocate"],
      ); // returns an array of NotificationTable objects

      const NotifyData: NotificationTables = Advocates.map((record) => ({
        UserId: record.Id ? Number(record?.Id ?? 0) : 0, // Convert to number and handle undefined
        Description: "New Health Event",
        Link: "/c/event",
        IsRead: false,
        DateCreated: new Date(),
      }));
      // console.log(NotifyData);
      if (
        !(await AddService.records(
          DBTable.t008,
          ["UserId", "Description", "Link", "IsRead", "DateCreated"],
          NotifyData.map(
            ({ UserId, Description, Link, IsRead, DateCreated }) => [
              UserId,
              Description,
              Link,
              IsRead,
              DateCreated,
            ],
          ),
        ))
      )
        return res.status(401).json({ data: false, message: Error.m003 });
    } else {
      if (Number(Data?.CreatedBy) > 1) {
        await AddService.record(
          DBTable.t008,
          ["UserId", "Description", "Link", "IsRead", "DateCreated"],
          [Number, String, String, Boolean, Date],
          [
            Data?.CreatedBy,
            "Health Event Disapproval",
            `/n/event/d/${RecordId}`,
            false,
            new Date(),
          ],
        );
      }
      const RequestAccess = (
        await GetService.byFields(
          "SELECT `Email` FROM `request_access` WHERE `EventId` = ?",
          ["EventId"],
          [Number],
          [RecordId],
        )
      )[0];
      if (RequestAccess) {
        const disapproveMessage = GenerateEmail(
          RequestAccess?.Email,
          `The Health Event you submitted was disapproved. ${Data?.Remarks ?? ""}`,
        );
        singleMailSender(
          RequestAccess?.Email,
          "Himsog Health Event - Disapproval",
          disapproveMessage,
        );
      }
    }

    return res.status(200).json({ data: true, message: Success.m004 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Event-Controller [Update]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
