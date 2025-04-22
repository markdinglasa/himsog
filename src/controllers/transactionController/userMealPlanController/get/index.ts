import { NextFunction, Request, Response } from "express";
import { Error, Success, UserMealPlanQuery } from "../../../../shared";
import { GetService } from "../../../../services";
import { UserMealPlan } from "../../../../types";

export const UserMealPlanGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.MealPlanId, 10); // UserMealPlan Id
    if (!Id || typeof Id !== "number")
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: UserMealPlan = (
      await GetService.byFields(UserMealPlanQuery.q003, ["Id"], [Number], [Id])
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("UserMealPlan-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
