import { NextFunction, Request, Response } from "express";
import { Error, RecipeQuery, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { SubscriptionLineQuery } from "../../../../shared/";
import { GetService } from "../../../../services";

export const SubscriptionLineGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const SubscriptionId: number = parseInt(req.params?.Id, 10);
    if (!SubscriptionId || SubscriptionId === 0 || SubscriptionId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (
      !(await isFound(RecipeQuery.q002, ["Id"], [Number], [SubscriptionId]))
        .data
    )
      return res.status(401).json({ data: [], message: Error.m011 }); // check Susbcription existence
    const response = await GetService.byFields(
      SubscriptionLineQuery.q001,
      ["SubscriptionId"],
      [Number],
      [SubscriptionId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("SubscriptionLine-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
