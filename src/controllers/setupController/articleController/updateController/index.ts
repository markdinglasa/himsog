import { NextFunction, Request, Response } from "express";
import {
  ArticleTable,
  NotificationTable,
  NotificationTables,
} from "../../../../types";
import {
  ArticleQuery,
  DBTable,
  Error,
  GenerateEmail,
  Success,
  UserQuery,
} from "../../../../shared";
import { articleValidator } from "../../../../validators";
import { AddService, GetService, UpdateService } from "../../../../services";
import { isFound, singleMailSender } from "../../../../functions";

export const ArticleUpdateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10),
      Data: ArticleTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = articleValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn here

    if (!(await isFound(ArticleQuery.q002, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: false, message: Error.m011 }); // check existence

    Data.DatePosted = new Date(Data.DatePosted);
    Data.DateCreated = new Date(Data?.DateCreated ?? new Date());
    Data.DateUpdated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await UpdateService.record(Id, DBTable.t030, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });

    if (Data?.IsValidated ?? false) {
      // NOTIFY ALL ADVOCATES
      const Advocates: NotificationTable[] = await GetService.byFields(
        UserQuery.q007,
        ["Role"],
        [String],
        ["advocate"],
      ); // returns an array of NotificationTable objects

      const NotifyData: NotificationTables = Advocates.map((record) => ({
        UserId: record.Id ? Number(record.Id) : 0, // Convert to number and handle undefined
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
      //
    } else {
      const RequestAccess = (
        await GetService.byFields(
          "SELECT `Email` FROM `request_access` WHERE `ArticleId` = ?",
          ["ArticleId"],
          [Number],
          [Id],
        )
      )[0];
      const disapproveMessage = GenerateEmail(
        RequestAccess?.Email,
        `The Health Article you submitted was disapproved. ${Data?.Remarks ?? ""}`,
      );
      singleMailSender(
        RequestAccess?.Email,
        "Himsog Health Article - Disapproval",
        disapproveMessage,
      );
    }

    return res.status(200).json({ data: true, message: Success.m004 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Article-Controller [Update]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
