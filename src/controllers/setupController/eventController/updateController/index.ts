import { NextFunction, Request, Response } from "express";
import { EventTable } from "../../../../types";
import { EventQuery, DBTable, Error, Success } from "../../../../shared";
import { eventValidator } from "../../../../validators";
import { UpdateService } from "../../../../services";
import { isFound } from "../../../../functions";

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
