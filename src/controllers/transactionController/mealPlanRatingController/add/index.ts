import { NextFunction, Request, Response } from "express";
import { MealPlanRating, UserMealPlan } from "../../../../types";
import {
  DBTable,
  Error,
  MealPlanRatingQuery,
  Success,
  UserMealPlanQuery,
} from "../../../../shared";
import { mealPlanRatingValidator } from "../../../../validators";
import { AddService, GetService, UpdateService } from "../../../../services";
import { isFound } from "../../../../functions";

export const MealPlanRatingAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: MealPlanRating = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = mealPlanRatingValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn

    if (
      (
        await isFound(
          MealPlanRatingQuery.q004,
          ["CreatedBy", "MealPlanId"],
          [Number, Number],
          [Data.CreatedBy, Data.MealPlanId],
        )
      ).data
    )
      return res.status(401).json({ data: false, message: Error.m050 }); // check duplicate rating on the same meal plan
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t032, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    const response: UserMealPlan = (
      await GetService.byFields(
        UserMealPlanQuery.q004,
        ["UserId", "MealPlanId"],
        [Number, Number],
        [Data?.CreatedBy ?? 0, Data?.MealPlanId ?? 0],
      )
    )[0];

    const DeactivateMealPlan: UserMealPlan = {
      UserId: Data?.CreatedBy ?? 0,
      MealPlanId: Data?.MealPlanId ?? 0,
      IsActive: false,
      DateActivated: null,
    };
    await UpdateService.record(
      Number(response?.Id ?? 0),
      DBTable.t033,
      Object.keys(DeactivateMealPlan),
      Object.values(DeactivateMealPlan).map((val) => typeof val),
      Object.values(DeactivateMealPlan),
    );
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MealPlanRating-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
