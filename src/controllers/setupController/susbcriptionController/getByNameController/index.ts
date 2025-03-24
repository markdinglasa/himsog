import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { SubscriptionQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { SubscriptionTable } from "../../../../types";

export const SubscriptionGetByNameController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Name: string = req.params?.Id; // Subscription Name
    if (!Name || Name === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: SubscriptionTable = (
      await GetService.byFields(
        SubscriptionQuery.q007,
        ["Name"],
        [String],
        [Name],
      )
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Subscription-Controller [GetByName]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
