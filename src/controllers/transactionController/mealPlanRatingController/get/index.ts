import { NextFunction, Request, Response } from "express";
import { Error, MealPlanQuery, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { MealPlanRatingQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { MealPlanRating } from "../../../../types";

export const MealPlanRatingGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const MealPlanId: number = parseInt(req.params?.MealPlanId, 10); // MealPlanRatingMealPlanId
    const UserId: number = parseInt(req.params?.UserId, 10);
    if (!MealPlanId || MealPlanId === 0 || MealPlanId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!UserId || UserId === 0 || UserId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (
      !(await isFound(MealPlanQuery.q002, ["Id"], [Number], [MealPlanId])).data
    )
      return res.status(401).json({ data: [], message: Error.m011 }); // check MealPlan existence
    const response: MealPlanRating = (
      await GetService.byFields(
        MealPlanRatingQuery.q003,
        ["CreatedBy", "MealPlanId"],
        [Number, Number],
        [UserId, MealPlanId],
      )
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MealPlanRating-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
