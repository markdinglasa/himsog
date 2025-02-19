import { NextFunction, Response } from "express";
import { LoginRequest, ModelResponse } from "../../../types";
import { Success, Error } from "../../../shared";
import { GenerateFn, getByEmail } from "../../../functions";
import { compare } from "bcrypt";

export const JWTAuth = async (
  req: LoginRequest,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const data = req.body;
    const user = await getByEmail(data?.Email ?? "");
    if (!user.data)
      return res.status(401).json({ data: false, message: Error.m011 });
    if (!(await compare(data.Password, user.data.Password)))
      return res.status(401).json({ data: false, message: Error.m019 });
    const accessToken: ModelResponse = await GenerateFn.accessToken(
      String(user.data.Id),
    );
    const refreshToken: ModelResponse = await GenerateFn.refreshToken(
      String(user.data.Id),
    );
    if (!accessToken.data || !refreshToken.data)
      return res.status(404).json({ data: false, message: Error.m004 });
    res.setHeader("Authorization", `Bearer ${accessToken.data}`);
    res.setHeader("Refresh-Token", refreshToken.data);
    return res.status(200).json({
      data: {
        Success: true,
        User: user.data,
        AccessToken: accessToken.data,
        RefreshToken: refreshToken.data,
      },
      message: Success.m001,
    });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("JWTAuth-Controller [JWTAuth]:", error.message);
    logging.log("----------------------------------------");
    return res.status(500).json({ data: false, message: Error.m001 });
  }
};
