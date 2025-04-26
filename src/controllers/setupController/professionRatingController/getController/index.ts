import { NextFunction, Request, Response } from "express";
import { Error, Success, UserQuery } from "../../../../shared";
import { isFound } from "../../../../functions";
import { ProfessionRatingQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { ProfessionRatingTable } from "../../../../types";

export const ProfessionRatingGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const NutritionistId: number = parseInt(req.params?.NutritionistId, 10); // ProfessionRatingId
    const AdvocateId: number = parseInt(req.params?.AdvocateId, 10); // ProfessionRatingId
    if (!NutritionistId || NutritionistId === 0 || NutritionistId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (
      !(await isFound(UserQuery.q002, ["Id"], [Number], [NutritionistId])).data
    )
      return res.status(401).json({ data: [], message: Error.m011 }); // check ProfessionRating existence
    const response: ProfessionRatingTable = (
      await GetService.byFields(
        ProfessionRatingQuery.q003,
        ["UserId", "CreatedBy"],
        [Number, Number],
        [NutritionistId, AdvocateId],
      )
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("ProfessionRating-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
