import { NextFunction, Request, Response } from "express";
import passport from "passport";
export const GoogleAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    passport.authenticate("google", {
      scope: ["email", "profile"],
      accessType: "offline",
      prompt: "consent",
    } as any)(req, res, next);
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("oAuth-Controller [GoogleAuth]:", error.message);
    logging.log("----------------------------------------");
  }
};
