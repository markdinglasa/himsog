import { NextFunction, Request, Response } from "express";
import { UnitTable } from "../../../../types";
import { DBTable, Error, UnitQuery, Success } from "../../../../shared";
import { unitValidator } from "../../../../validators";
import { AddService } from "../../../../services";
import { isFound } from "../../../../functions";

export const UnitAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: UnitTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = unitValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    if ((await isFound(UnitQuery.q004, ["Name"], [Number], [Data.Name])).data)
      return res.status(401).json({ data: true, message: Error.m016 }); // check duplicate name
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t018, Fields, Types, Values)))
      return res.status(401).json({ data: true, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Unit-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
