import { NextFunction, Request, Response } from "express";
import { DBTable, Success, Error, UserQuery } from "../../../../shared";
import { GetService, UpdateService } from "../../../../services";
import { userPasswordValidator } from "../../../../validators";
import { hash, compare } from "bcrypt";

interface ChangePassword {
  Password: string;
  DateUpdated: Date;
  ConfirmPassword: string;
  CurrentPassword: string;
}

export const UserUpdatePasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id = parseInt(req.params.Id ?? 0),
      { ConfirmPassword, ...filteredData }: ChangePassword = req.body;
    if (!Id || typeof Id !== "number")
      return res.status(401).json({ data: false, message: Error.m005 });
    if (
      !filteredData ||
      filteredData === undefined ||
      typeof filteredData === "undefined" ||
      typeof filteredData !== "object"
    )
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = userPasswordValidator.validate({ ...filteredData });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    const user = (await GetService.byId(Id, DBTable.t016))[0];
    if (!user)
      return res.status(404).json({ data: false, message: Error.m011 }); // check existence
    if (!(await compare(filteredData.CurrentPassword, user.Password)))
      return res.status(401).json({ data: false, message: Error.m047 });
    filteredData.Password = await hash(filteredData.Password, 10);
    filteredData.DateUpdated = new Date();
    const { CurrentPassword, ...record } = filteredData;
    const Fields = Object.keys(record);
    const Types = Object.values(record).map((val) => typeof val);
    const Values = Object.values(record);
    if (!(await UpdateService.record(Id, DBTable.t016, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m003 });
    return res.status(200).json({ data: true, message: Success.m004 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("User-Controller [ChangePassword]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
