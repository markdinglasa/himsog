import { NextFunction, Request, Response } from "express";
import { DBTable, Success, Error, UserQuery } from "../../../../shared";
import { UpdateService } from "../../../../services";
import { isFound } from "../../../../functions";
import { UserTable } from "../../../../types";

export const UserUpdateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id = parseInt(req.params.Id ?? 0),
      Data: UserTable = req.body;
    if (!Id || typeof Id !== "number")
      return { data: false, message: Error.m005 };
    if (
      !Data ||
      Data === undefined ||
      typeof Data === "undefined" ||
      typeof Data !== "object"
    )
      return { data: false, message: Error.m014 };

    if (!(await isFound(UserQuery.q006, ["Id"], [Number], [Id])).data)
      return { data: false, message: Error.m011 }; // check existence
    Data.DateUpdated = new Date();
    const { Password, ...filteredData } = Data;
    const Fields = Object.keys(filteredData);
    const Types = Object.values(filteredData).map((val) => typeof val);
    const Values = Object.values(filteredData);
    if (!(await UpdateService.record(Id, DBTable.t016, Fields, Types, Values)))
      return { data: false, message: Error.m003 };
    return { data: true, message: Success.m004 };
  } catch (error: any) {}
};
