import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../shared";

export const TokenValidatorController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data = req.body;
    if (!Data?.token)
      return res.status(400).json({ data: false, message: Error.m023 });
    return res.status(200).json({ data: true, message: Success.m001 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("TokenValidator-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
