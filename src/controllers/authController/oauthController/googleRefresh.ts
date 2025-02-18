import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../shared";
import axios from "axios";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../../../config";

export const GoogleRefresh = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> => {
  try {
    const { refreshToken } = req.body;
    const response = await axios.post("https://oauth2.googleapis.com/token", {
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    });
    const newAccessToken: string = response.data.access_token;
    return res
      .status(200)
      .json({ data: newAccessToken, message: Success.m001 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("oAuth-Controller [refresh-google]:", error.message);
    logging.log("----------------------------------------");
    return res.status(500).json({ data: false, message: Error.m001 });
  }
};
