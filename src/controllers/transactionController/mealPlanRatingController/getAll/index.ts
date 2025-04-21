import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { MealPlanRequestQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { MealPlanRatings } from "../../../../types";

export const MealPlanRatingGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const MealPlanId: number = parseInt(req.params?.Id, 10); // MealPlanId
    if (!MealPlanId || MealPlanId === 0 || MealPlanId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: MealPlanRatings = await GetService.byFields(
      MealPlanRequestQuery.q001,
      ["MealPlanId"],
      [Number],
      [MealPlanId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MealPlanRating-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
