import { NextFunction, Request, Response } from "express";
import { DBTable, Error, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { ReminderQuery } from "../../../../shared/";
import { RemoveService } from "../../../../services";

export const ReminderRemoveController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10); // ReminderId
    if (!Id || Id === 0 || Id === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(ReminderQuery.q002, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check Reminder existence
    // Check Transaction
    const response = await RemoveService.byId(Id, DBTable.t013);
    return res.status(200).json({ data: response, message: Success.m003 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Reminder-Controller [Remove]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
