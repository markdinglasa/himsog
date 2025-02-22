import { NextFunction, Request, Response } from "express";
import { MealPlanRequestTable } from "../../../../types";
import { DBTable, Error, Success } from "../../../../shared";
import { mealPlanRequestValidator } from "../../../../validators";
import { AddService } from "../../../../services";

export const MealPlanRequestAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: MealPlanRequestTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = mealPlanRequestValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t007, Fields, Types, Values)))
      return res.status(401).json({ data: true, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MealPlanRequest-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
