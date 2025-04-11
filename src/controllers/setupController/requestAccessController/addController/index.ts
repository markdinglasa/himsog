import { NextFunction, Request, Response } from "express";
import {
  NotificationTable,
  NotificationTables,
  RequestAccessTable,
} from "../../../../types";
import { DBTable, Error, Success, UserQuery } from "../../../../shared";
import { requestAccessValidator } from "../../../../validators";
import { AddService, GetService } from "../../../../services";

export const RequestAccessAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: RequestAccessTable = req.body;
    // console.log("RequestAccess Data:", Data);
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = requestAccessValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    // NOTIFY ALL ADMINISTRATORS
    const Admins: NotificationTable[] = await GetService.byFields(
      UserQuery.q007,
      ["Role"],
      [String],
      ["administrator"],
    ); // returns an array of NotificationTable objects

    const NotifyData: NotificationTables = Admins.map((record) => ({
      UserId: record.Id ? Number(record.Id) : 0, // Convert to number and handle undefined
      Description: "New Request Access",
      Link: "/a/request-access",
      IsRead: false,
      DateCreated: new Date(),
    }));
    // console.log(NotifyData);
    if (
      !(await AddService.records(
        DBTable.t008,
        ["UserId", "Description", "Link", "IsRead", "DateCreated"],
        NotifyData.map(({ UserId, Description, Link, IsRead, DateCreated }) => [
          UserId,
          Description,
          Link,
          IsRead,
          DateCreated,
        ]),
      ))
    )
      return res.status(401).json({ data: false, message: Error.m003 }); // getting this error Add-Service [addRecords]: Malformed communication packet.

    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);

    if (!(await AddService.record(DBTable.t025, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("RequestAccess-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
