import { NextFunction, Request, Response } from "express";
import { Error, MealPlanQuery, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { MealPlanTable } from "../../../../types";

export const MealPlanGetDetailsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const UserId = parseInt(req.query.UserId as string, 10);
    const MealPlanId = parseInt(req.query.MealPlanId as string, 10);
    if (!UserId || !MealPlanId)
      return res
        .status(401)
        .json({ data: { Status: "NA" }, message: Error.m005 });
    const response: MealPlanTable = (
      await GetService.byFields(
        MealPlanQuery.q006,
        ["UserId", "MealPlanId"],
        [Number, Number],
        [UserId, MealPlanId],
      )
    )[0];
    if (!response)
      return res
        .status(203)
        .json({ data: { Status: "NA" }, message: Error.m011 });
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.error("MealPlan-Controller [getDetails]:", error);
    return res.status(500).json({
      data: [],
      message: error.message || Error.m001,
    });
  }
};
