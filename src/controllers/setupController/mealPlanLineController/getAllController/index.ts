import { NextFunction, Request, Response } from "express";
import { Error, MealPlanQuery, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { MealPlanLineQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { MealPlanLineTables } from "../../../../types";

export const MealPlanLineGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const MealPlanId: number = Number(req.query?.MealPlanId);
    const IsActive: number = Number(req.query?.IsActive);

    if (!MealPlanId || MealPlanId === 0 || MealPlanId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (
      !(await isFound(MealPlanQuery.q002, ["Id"], [Number], [MealPlanId])).data
    )
      return res.status(401).json({ data: [], message: Error.m011 }); // check MealPlan existence
    const query = Boolean(IsActive)
      ? MealPlanLineQuery.q001
      : MealPlanLineQuery.q004;

    const response: MealPlanLineTables = await GetService.byFields(
      query,
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
