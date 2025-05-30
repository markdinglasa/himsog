import { NextFunction, Request, Response } from "express";
import { ProfessionInstituteTable } from "../../../../types";
import {
  DBTable,
  Error,
  ProfessionInstituteQuery,
  Success,
} from "../../../../shared";
import { professionInstituteValidator } from "../../../../validators";
import { AddService } from "../../../../services";
import { isFound } from "../../../../functions";

export const ProfessionInstituteAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: ProfessionInstituteTable = req.body;
    console.log("Data:", Data);
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = professionInstituteValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    if (
      (
        await isFound(
          ProfessionInstituteQuery.q004,
          ["UserId", "Name"],
          [Number, String],
          [Data.UserId, Data.Name],
        )
      ).data
    )
      return res.status(401).json({ data: true, message: Error.m016 }); // CHECK DUPLICATE ON CREATE
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t027, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("ProfessionInstitute-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
