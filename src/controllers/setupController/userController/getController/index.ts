import { NextFunction, Request, Response } from "express";
import { Success, UserQuery, Error } from "../../../../shared";
import { isFound } from "../../../../functions";
import { GetService } from "../../../../services";

export const UserGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id = parseInt(req.params.Id ?? 0);
    if (!Id || typeof Id !== "number") return { data: [], message: Error.m005 };
    const isExists = await isFound(UserQuery.q006, ["Id"], [Number], [Id]);
    if (!isExists.data) return { data: [], message: isExists.message };
    const response = await GetService.byFields(
      UserQuery.q002,
      ["Id"],
      [Number],
      [Id],
    );
    if (!response) return { data: [], message: Error.m011 };
    return { data: response[0], message: Success.m001 };
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("User-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
