import { NextFunction, Request, Response } from "express";
import { MealPlanTable } from "../../../../types";
import { DBTable, Error, MealPlanQuery, Success } from "../../../../shared";
import { mealPlanValidator } from "../../../../validators";
import { AddService } from "../../../../services";
import { isFound } from "../../../../functions";

export const MealPlanAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: MealPlanTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = mealPlanValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    if (
      (await isFound(MealPlanQuery.q004, ["UserId"], [Number], [Data.UserId]))
        .data
    )
      return res.status(401).json({ data: true, message: Error.m016 });
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t006, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MealPlan-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
