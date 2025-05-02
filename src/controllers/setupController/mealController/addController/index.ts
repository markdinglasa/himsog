import { NextFunction, Request, Response } from "express";
import { MealTable } from "../../../../types";
import { DBTable, Error, MealQuery, Success } from "../../../../shared";
import { mealValidator } from "../../../../validators";
import { AddService, GetService } from "../../../../services";
import { isFound } from "../../../../functions";

export const MealAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: MealTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: [], message: Error.m014 });
    const { error } = mealValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: [],
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
      return res.status(401).json({ data: [], message: Error.m043 }); // check duplicate Name

    if (
      Boolean(
        (
          await GetService.byQuery(
            `SELECT CASE WHEN EXISTS (SELECT 1 FROM subscription_line sl JOIN subscription s ON s.Id = sl.SubscriptionId WHERE sl.UserId = ${Data?.CreatedBy ?? 0} AND s.Name = 'Premium' AND sl.DateStart <= CURRENT_DATE() AND (sl.DateEnd IS NULL OR sl.DateEnd >= CURRENT_DATE()) AND sl.IsCancelled = 0) THEN false ELSE ( SELECT COUNT(m.Id) >= 10  FROM meal m WHERE m.CreatedBy = ${Data?.CreatedBy ?? 0} ) END AS Limits`,
          )
        )[0].Limits,
      )
    )
      return res.status(401).json({ data: [], message: Error.m051 }); // check subscription if active & premium
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    3;
    const response = await AddService.recordReturnData(
      DBTable.t005,
      Fields,
      Types,
      Values,
    );
    if (!response)
      return res.status(401).json({ data: [], message: Error.m002 });
    return res.status(200).json({ data: response, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Meal-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
