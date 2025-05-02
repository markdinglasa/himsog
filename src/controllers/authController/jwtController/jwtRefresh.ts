import { NextFunction, Response } from "express";
import { LoginRequest, ModelResponse } from "../../../types";
import { Success, Error } from "../../../shared";
import { GenerateFn } from "../../../functions";

export const JWTRefresh = async (
  req: LoginRequest,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const user: number = parseInt(`${req.User?.Id}`, 10);
    const accessToken: ModelResponse = await GenerateFn.accessToken(
      String(user),
    );
    const refreshToken: ModelResponse = await GenerateFn.refreshToken(
      String(user),
    );
    if (!accessToken.data || !refreshToken.data)
      return res.status(404).json({ data: false, message: Error.m004 });
    res.setHeader("Authorization", `Bearer ${accessToken.data}`);
    res.setHeader("Refresh-Token", refreshToken.data);
    return res.status(200).json({
      data: {
        User: user,
        AccessToken: accessToken.data,
        RefreshToken: refreshToken.data,
      },
      message: Success.m001,
    });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("JWTAuth-Controller [JWTRefresh]:", error.message);
    logging.log("----------------------------------------");
    return res.status(500).json({ data: false, message: Error.m001 });
  }
};
