import { NextFunction, Request, Response } from "express";
import { DBTable, Success, Error, UserQuery } from "../../../../shared";
import { UpdateService } from "../../../../services";
import { isFound } from "../../../../functions";
import { UserTable } from "../../../../types";
import { userValidator } from "../../../../validators";

export const UserUpdateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id = parseInt(req.params.Id ?? 0),
      Data: UserTable = req.body;
    if (!Id || typeof Id !== "number")
      return res.status(401).json({ data: false, message: Error.m005 });
    if (
      !Data ||
      Data === undefined ||
      typeof Data === "undefined" ||
      typeof Data !== "object"
    )
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = userValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    if (!(await isFound(UserQuery.q006, ["Id"], [Number], [Id])).data)
      return res.status(404).json({ data: false, message: Error.m011 }); // check existence
    Data.DateUpdated = new Date();
    const { Password, ...filteredData } = Data;
    const Fields = Object.keys(filteredData);
    const Types = Object.values(filteredData).map((val) => typeof val);
    const Values = Object.values(filteredData);
    if (!(await UpdateService.record(Id, DBTable.t016, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m003 });

    return res.status(200).json({ data: true, message: Success.m004 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("User-Controller [Update]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
