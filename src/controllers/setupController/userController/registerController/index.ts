import { NextFunction, Request, Response } from "express";
import { CivilStatus, RegisterTable, UserTable } from "../../../../types";
import { DBTable, Error, Success, UserQuery } from "../../../../shared";
import { isFound } from "../../../../functions";
import { registerValidator, userValidator } from "../../../../validators";
import bcrypt from "bcrypt";
import { AddService } from "../../../../services";

export const UserRegisterController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const { ConfirmPassword, ...filteredData } = req.body;
    const Data: UserTable = filteredData;
    // console.log("filteredData:", filteredData);
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = registerValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    if ((await isFound(UserQuery.q003, ["Email"], [String], [Data.Email])).data)
      return res.status(404).json({ data: false, message: Error.m041 });
    Data.Password = await bcrypt.hash(Data.Password, 10);
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data),
      Types = Object.values(Data).map((val) => typeof val),
      Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t016, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("User-Controller [add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
