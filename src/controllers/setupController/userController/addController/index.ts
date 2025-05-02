import { NextFunction, Request, Response } from "express";
import { UserTable } from "../../../../types";
import {
  DBTable,
  Error,
  PasswordGenerateEmail,
  Success,
  UserQuery,
} from "../../../../shared";
import { GenerateFn, isFound, singleMailSender } from "../../../../functions";
import { userValidator } from "../../../../validators";
import bcrypt from "bcrypt";
import { AddService } from "../../../../services";

export const UserAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: UserTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = userValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    if ((await isFound(UserQuery.q003, ["Email"], [String], [Data.Email])).data)
      return res.status(404).json({ data: false, message: Error.m041 });
    // Generate Random Password
    const RandomPassword = await GenerateFn.randomPassword(15);
    // Email the password
    if (
      !RandomPassword.data ||
      typeof RandomPassword.data !== "string" ||
      RandomPassword.data.length < 15
    ) {
      return { data: false, message: RandomPassword.message || Error.m032 };
    }
    const PasswordEmail = PasswordGenerateEmail(
      Data.Firstname,
      RandomPassword.data,
    );
    const sendemail = singleMailSender(
      Data.Email,
      "Account Registration",
      PasswordEmail ?? "NA",
    );
    if (sendemail.data === false)
      return { data: false, message: sendemail.message || Error.m031 };

    Data.Password = await bcrypt.hash(RandomPassword.data, 10);
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
