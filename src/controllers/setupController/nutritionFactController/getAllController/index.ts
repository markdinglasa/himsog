import { NextFunction, Request, Response } from "express";
import { Error, MealQuery, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { NutritionFactQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { NutritionFactTables } from "../../../../types";

export const NutritionFactGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const MealId: number = parseInt(req.params?.Id, 10);
    if (!MealId || MealId === 0 || MealId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(MealQuery.q002, ["Id"], [Number], [MealId])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check Meal existence
    const response: NutritionFactTables = await GetService.byFields(
      NutritionFactQuery.q001,
      ["MealId"],
      [Number],
      [MealId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("NutritionFact-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
