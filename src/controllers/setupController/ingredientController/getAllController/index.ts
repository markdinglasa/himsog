import { NextFunction, Request, Response } from "express";
import { Error, MealQuery, Success } from "../../../../shared";
import { IngredientQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { isFound } from "../../../../functions";

export const IngredientGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const MealId: number = parseInt(req.params?.Id, 10);
    if (!MealId || MealId === 0 || MealId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(MealQuery.q002, ["Id"], [Number], [MealId])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check User existence

    const response = await GetService.byFields(
      IngredientQuery.q001,
      ["MealId"],
      [Number],
      [MealId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Ingredient-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
