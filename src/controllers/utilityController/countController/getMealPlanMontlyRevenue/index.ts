import { NextFunction, Request, Response } from "express";
import { GetService } from "../../../../services";
import { Error, Success, CountQuery } from "../../../../shared";

export const NutritionistGetMealPlanMonthlyRevenueWithPercentage = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const NutritionistId: number = parseInt(req.params.Id, 10);
    const response = (
      await GetService.byFields(
        CountQuery.q005,
        ["UserId"],
        [Number],
        [NutritionistId],
      )
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error(
      "AdminGetAllCount-Controller [SubscriptionMonthlyRevenue]:",
      error.message,
    );
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
