import { NextFunction, Request, Response } from "express";
import { GetService } from "../../../../services";
import { Error, Success, CountQuery } from "../../../../shared";

export const AdminGetSubscriptionDailyRevenueWithPercentage = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const response = (await GetService.byQuery(CountQuery.q004))[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error(
      "AdminGetAllCount-Controller [SubscriptionDailyRevenue]:",
      error.message,
    );
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
