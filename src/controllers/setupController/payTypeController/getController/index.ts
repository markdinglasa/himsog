import { NextFunction, Request, Response } from "express";
import { Error, PayTypeQuery, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { PayTypeTable } from "../../../../types";

export const PayTypeGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10);
    if (!Id || Id === 0 || Id === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: PayTypeTable = (
      await GetService.byFields(PayTypeQuery.q003, ["Id"], [Number], [Id])
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("PayType-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
