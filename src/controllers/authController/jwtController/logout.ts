import { NextFunction, Response } from "express";
import { LoginRequest } from "../../../types";
import { Success, Error } from "../../../shared";

export const Logout = async (
  req: LoginRequest,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    req.User = undefined;
    req.AccessToken = undefined;
    req.RefreshToken = undefined;
    return res.status(200).json({ data: true, message: Success.m001 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("JWTAuth-Controller [Logout]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
