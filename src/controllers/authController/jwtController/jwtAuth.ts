import { NextFunction, Response } from "express";
import { LoginRequest, ModelResponse } from "../../../types";
import { Success, Error, DBTable } from "../../../shared";
import { GenerateFn, getByEmail } from "../../../functions";
import { compare } from "bcrypt";
import { AddService } from "../../../services";
import { loginValidator } from "../../../validators";

export const JWTAuth = async (
  req: LoginRequest,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const data = req.body;
    const { error } = loginValidator.validate({ ...data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    const user = await getByEmail(data?.Email ?? "");
    // console.log(user);
    if (!user.data)
      return res.status(401).json({ data: false, message: Error.m011 });
    if (!(await compare(data.Password, user.data.Password)))
      return res.status(401).json({ data: false, message: Error.m019 });
    // check account if suspended

    if (user.data?.IsSuspended ?? false)
      return res.status(401).json({ data: false, message: Error.m042 });

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

    // Log user on login
    await AddService.record(
      DBTable.t017,
      ["UserId", "DateLog"],
      [Number, Date],
      [user.data.Id, new Date()],
    );

    return res.status(200).json({
      data: {
        Success: true,
        User: user.data.Id,
        Role: user.data.Role,
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
