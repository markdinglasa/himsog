import { NextFunction, Request, Response } from "express";
import { DBTable, Error, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { SubscriptionQuery } from "../../../../shared/";
import { RemoveService } from "../../../../services";

export const SubscriptionRemoveController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10); // SubscriptionId
    if (!Id || Id === 0 || Id === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(SubscriptionQuery.q002, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check Subscription existence
    // Check Transaction
    // cannot remove subscription if there were users subscribing on it
    if (
      (
        await isFound(
          SubscriptionQuery.q006,
          ["SubscriptionId"],
          [Number],
          [Id],
        )
      ).data
    )
      return res.status(401).json({ data: true, message: Error.m020 });
    if (!(await RemoveService.byId(Id, DBTable.t022)))
      return { data: false, message: Error.m002 };
    return res.status(200).json({ data: true, message: Success.m003 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Subscription-Controller [Remove]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
