import { NextFunction, Request, Response } from "express";
import { MealTable } from "../../../../types";
import { DBTable, Error, MealQuery, Success } from "../../../../shared";
import { mealValidator } from "../../../../validators";
import { AddService } from "../../../../services";
import { isFound } from "../../../../functions";

export const MealAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: MealTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = mealValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    if (
      (
        await isFound(
          MealQuery.q004,
          ["UserId", "Name"],
          [Number, String],
          [Data.UserId, Data.Name],
        )
      ).data
    )
      return res.status(401).json({ data: false, message: Error.m043 }); // check duplicate Name
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (
      !(await AddService.recordReturnData(DBTable.t005, Fields, Types, Values))
    )
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Meal-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
