import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { MealPlanQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { MealPlanTable } from "../../../../types";

export const MealPlanGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10); // MealPlanId
    if (!Id || Id === 0 || Id === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(MealPlanQuery.q002, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check MealPlan existence
    const response: MealPlanTable = (
      await GetService.byFields(MealPlanQuery.q003, ["Id"], [Number], [Id])
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MealPlan-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
