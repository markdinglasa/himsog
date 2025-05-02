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
    if (!Id || typeof Id !== "number")
      return res.status(401).json({ data: false, message: Error.m005 });
    if (!(await isFound(UserQuery.q006, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: false, message: Error.m011 });
    const response = await GetService.byFields(
      UserQuery.q002,
      ["Id"],
      [Number],
      [Id],
    );
    return res.status(200).json({ data: response[0], message: Success.m001 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("User-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
