import { NextFunction, Request, Response } from "express";
import {
  EventTable,
  NotificationTable,
  NotificationTables,
} from "../../../../types";
import { DBTable, Error, Success, UserQuery } from "../../../../shared";
import { eventValidator } from "../../../../validators";
import { AddService, GetService, UpdateService } from "../../../../services";

export const EventAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: EventTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = eventValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn

    Data.ScheduleDate = new Date(Data.ScheduleDate);
    Data.DateCreated = new Date();
    const { RequestAccessId, ...filtered } = Data;
    const Fields = Object.keys(filtered);
    const Types = Object.values(filtered).map((val) => typeof val);
    const Values = Object.values(filtered);
    const response = await AddService.recordReturnData(
      DBTable.t009,
      Fields,
      Types,
      Values,
    );
    if (!response)
      return res.status(401).json({ data: false, message: Error.m002 });
    if (Number(Data?.RequestAccessId) > 0) {
      await UpdateService.record(
        Data?.RequestAccessId,
        DBTable.t025,
        ["EventId"],
        [Number],
        [response?.Id ?? 0],
      );
    } // UPDATE REQUEST ACCESS
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Event-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
