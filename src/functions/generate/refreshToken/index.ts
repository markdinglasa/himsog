import { Error, Success } from "../../../shared";
import { SECRET_REFRESH_KEY } from "../../../config";
import { sign } from "jsonwebtoken";
import { ModelResponse } from "../../../types";

export const refreshToken = async (
  UserId: string = "",
): Promise<ModelResponse> => {
  try {
    if (!UserId || typeof UserId !== "string")
      return { data: null, message: Error.m012 };
    if (!SECRET_REFRESH_KEY) return { data: null, message: Error.m013 };
    const token = sign({ UserId }, SECRET_REFRESH_KEY, { expiresIn: "1d" });
    if (!token) return { data: null, message: Error.m003 };
    return { data: token, message: Success.m008 };
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Generate-Fn [accessToken]:", error.message);
    logging.log("----------------------------------------");
    return { data: null, message: Error.m001 };
  }
};
