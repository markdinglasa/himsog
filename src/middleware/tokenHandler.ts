import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Error } from "../shared/messages";
import { SECRET_KEY } from "../config";
import { LoginRequest } from "../types";
import axios from "axios";

export default class TokenHandler {
  static verifyToken = async (
    req: LoginRequest,
    res: Response,
    next: NextFunction,
  ): Promise<any> => {
    const authorizationHeader = req.headers["authorization"];
    const refreshToken = req.headers["refresh-token"] as string;
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer "))
      return res.status(403).json({ data: false, message: Error.m004 });
    const accessToken = authorizationHeader.split(" ")[1];
    if (req.headers["x-auth-provider"])
      return this.verifyGoogleToken(req, res, next);
    else {
      jwt.verify(
        accessToken,
        SECRET_KEY,
        (error: jwt.VerifyErrors | null, User: any) => {
          if (error) {
            if (error.name === "TokenExpiredError")
              return this.refresh(req, res, next);
            return res.status(403).json({ data: false, message: Error.m004 });
          }
          req.User = User;
          req.AccessToken = accessToken;
          req.RefreshToken = refreshToken;
          next();
        },
      );
    }
  };

  static verifyGoogleToken = async (
    req: LoginRequest,
    res: Response,
    next: NextFunction,
  ) => {
    const accessToken = req.headers["authorization"]?.split(" ")[1];
    const refreshToken = req.headers["refresh-token"] as string;
    if (!accessToken)
      return res.status(403).json({ error: "Access token is missing" });
    try {
      const response = await axios.get(
        `https://oauth2.googleapis.com/tokeninfo?access_token=${accessToken}`,
      );
      const tokenInfo = response.data;
      if (tokenInfo.aud !== process.env.GOOGLE_CLIENT_ID)
        return res.status(403).json({ data: false, message: Error.m026 });
      const currentTime = Math.floor(Date.now() / 1000);
      if (parseInt(tokenInfo.exp, 10) < currentTime)
        return res.status(403).json({ data: false, message: Error.m025 });
      req.User = tokenInfo;
      req.AccessToken = accessToken;
      req.RefreshToken = refreshToken;
      next();
    } catch (error) {
      return res.status(403).json({ data: false, message: Error.m004 });
    }
  };

  // Refresh Access Token using the Refresh Token
  static refresh = async (
    req: LoginRequest,
    res: Response,
    next: NextFunction,
  ) => {
    const refreshToken = req.headers["refresh-token"] as string;
    if (!refreshToken)
      return res.status(403).json({ data: false, message: Error.m023 });

    jwt.verify(
      refreshToken,
      SECRET_KEY,
      (error: jwt.VerifyErrors | null, User: any) => {
        if (error) {
          return res.status(403).json({ data: false, message: Error.m004 });
        }
        const newAccessToken = jwt.sign({ User: User }, SECRET_KEY, {
          expiresIn: "1d",
        });
        res.setHeader("Authorization", `Bearer ${newAccessToken}`);
        return res.status(200).json({
          success: true,
          accessToken: newAccessToken,
        });
      },
    );
  };
}
