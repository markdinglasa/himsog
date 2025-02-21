import { NextFunction, Request, Response } from "express";
import { Error, MealPlanQuery, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { MealPlanLineQuery } from "../../../../shared/";
import { GetService } from "../../../../services";

export const MealPlanLineGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const MealPlanId: number = parseInt(req.params?.Id, 10);
    if (!MealPlanId || MealPlanId === 0 || MealPlanId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (
      !(await isFound(MealPlanQuery.q002, ["Id"], [Number], [MealPlanId])).data
    )
      return res.status(401).json({ data: [], message: Error.m011 }); // check MealPlan existence
    const response = await GetService.byFields(
      MealPlanLineQuery.q001,
      ["MealPlanId"],
      [Number],
      [MealPlanId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MealPlanLine-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
