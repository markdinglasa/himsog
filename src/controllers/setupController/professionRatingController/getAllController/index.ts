import { NextFunction, Request, Response } from "express";
import { Error, ProfessionQuery, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { ProfessionRatingQuery } from "../../../../shared/";
import { GetService } from "../../../../services";

export const ProfessionRatingGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const UserId: number = parseInt(req.params?.Id, 10);
    if (!UserId || UserId === 0 || UserId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(ProfessionQuery.q002, ["Id"], [Number], [UserId])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check Profession existence
    const response = await GetService.byFields(
      ProfessionRatingQuery.q001,
      ["UserId"],
      [Number],
      [UserId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("ProfessionRating-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
