import { NextFunction, Request, Response } from "express";
import { Error, Success, UserQuery } from "../../../../shared";
import { MealPlanRequestQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { isFound } from "../../../../functions";

export const MealPlanRequestGetAllByNutritionistController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const NutritionistId: number = parseInt(req.params?.Id, 10); // NutritionistId
    if (!NutritionistId || NutritionistId === 0 || NutritionistId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (
      !(await isFound(UserQuery.q002, ["Id"], [Number], [NutritionistId])).data
    )
      return res.status(401).json({ data: [], message: Error.m011 }); // check User existence
    const response = await GetService.byFields(
      MealPlanRequestQuery.q004,
      ["NutritionistId"],
      [Number],
      [NutritionistId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error(
      "MealPlanRequest-Controller [GetAllByNutritionist]:",
      error.message,
    );
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
