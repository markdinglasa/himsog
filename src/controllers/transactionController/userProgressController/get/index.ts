import { NextFunction, Request, Response } from "express";
import { Error, Success, UserProgressQuery } from "../../../../shared";
import { GetService } from "../../../../services";
import { UserProgress } from "../../../../types";

export const UserProgressGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10); // Id
    if (!Id || typeof Id !== "number")
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: UserProgress = (
      await GetService.byFields(UserProgressQuery.q003, ["Id"], [Number], [Id])
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("UserProgress-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
