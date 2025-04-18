import { NextFunction, Request, Response } from "express";
import { DBTable, Success, Error, UserQuery } from "../../../../shared";
import { UpdateService } from "../../../../services";
import { isFound } from "../../../../functions";

interface SuspendTable {
  DateUpdated: Date;
  IsSuspended: boolean;
}
export const UserSuspendController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id = parseInt(req.params.Id ?? 0),
      Data: SuspendTable = req.body; // requires IsSuspended
    if (!Id || typeof Id !== "number")
      return res.status(401).json({ data: false, message: Error.m005 });
    if (!(await isFound(UserQuery.q006, ["Id"], [Number], [Id])).data)
      return res.status(404).json({ data: false, message: Error.m011 }); // check existence
    Data.DateUpdated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await UpdateService.record(Id, DBTable.t016, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m003 });
    return res.status(200).json({
      data: true,
      message: Data.IsSuspended ? Success.m009 : Success.m010,
    });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("User-Controller [Suspened]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
