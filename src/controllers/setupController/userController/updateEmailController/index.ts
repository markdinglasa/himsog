import { NextFunction, Request, Response } from "express";
import { DBTable, Success, Error, UserQuery } from "../../../../shared";
import { GetService, UpdateService } from "../../../../services";
import { isFound } from "../../../../functions";
import { userEmailValidator } from "../../../../validators";
import { compare } from "bcrypt";

export const UserUpdateEmailController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id = parseInt(req.params.Id ?? 0),
      Data: { Password: string; Email: string; DateUpdated: Date } = req.body;
    const { Password, ...filtereddata } = Data;
    if (!Id || typeof Id !== "number")
      return res.status(401).json({ data: false, message: Error.m005 });
    if (
      !Data ||
      Data === undefined ||
      typeof Data === "undefined" ||
      typeof Data !== "object"
    )
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = userEmailValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    const user = (await GetService.byId(Id, DBTable.t016))[0];
    if (!user)
      return res.status(404).json({ data: false, message: Error.m011 }); // check existence
    //console.log("user:", user);
    if (!(await compare(Data.Password, user.Password)))
      return res.status(401).json({ data: false, message: Error.m047 });
    Data.DateUpdated = new Date();
    const Fields = Object.keys(filtereddata);
    const Types = Object.values(filtereddata).map((val) => typeof val);
    const Values = Object.values(filtereddata);
    if (!(await UpdateService.record(Id, DBTable.t016, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m003 });
    return res.status(200).json({ data: true, message: Success.m004 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("User-Controller [UpdateEmail]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
