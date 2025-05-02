import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { Error, Success } from "../../../shared";

export const GoogleRedirect = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    passport.authenticate("google", async (err: any, user: any) => {
      if (err)
        return res.status(405).json({ data: false, message: Error.m021 });
      if (!user)
        return res.status(404).json({ data: false, message: Error.m018 });

      req.login(user, (loginErr) => {
        if (loginErr)
          return res.status(500).json({ data: false, message: Error.m022 });
        const accessToken: string = user.AccessToken;
        const refreshToken: string = user.RefreshToken;
        res.setHeader("Authorization", `Bearer ${accessToken}`);
        res.setHeader("Refresh-Token", refreshToken);
        res.setHeader("X-Auth-Provider", "google");
        return res.status(200).json({
          data: {
            success: true,
            user: user,
            accessToken: accessToken,
            refreshToken: refreshToken,
          },
          message: Success.m001,
        });
      });
    })(req, res);
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("oAuth-Controller [GoogleRedirect]:", error.message);
    logging.log("----------------------------------------");
    res.status(500).json({ data: false, message: Error.m001 });
  }
};
