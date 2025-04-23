import { NextFunction, Request, Response } from "express";
import { GetService } from "../../../../services";
import { Error, Success, CountQuery } from "../../../../shared";

export const AdminGetSubscriptionMonthlyRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const response = await GetService.byQuery(CountQuery.q002);
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
