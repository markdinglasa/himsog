import { NextFunction, Request, Response } from "express";
import { GetService } from "../../../../services";
import { Success, Error, UserQuery } from "../../../../shared";

export const UserGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const response = await GetService.byQuery(UserQuery.q001);
    return res.status(500).json({ data: response, message: Success.m001 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("User-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
