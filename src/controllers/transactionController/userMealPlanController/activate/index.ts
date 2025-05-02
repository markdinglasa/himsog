import { NextFunction, Request, Response } from "express";
import { DBTable, Error, Success, UserMealPlanQuery } from "../../../../shared";
import { GetService, UpdateService } from "../../../../services";
import { UserMealPlan } from "../../../../types";
import { isFound } from "../../../../functions";

export const UserMealPlanActivateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const user: number = req.query.user ? Number(req.query.user) : 0;
    const mealplan: number = req.query.mealplan
      ? Number(req.query.mealplan)
      : 0; // Ensure mealplan is a number
    const isActive: boolean = req.query?.active === "1";

    if (
      !user ||
      typeof user !== "number" ||
      !mealplan ||
      typeof mealplan !== "number"
    )
      return res.status(401).json({ data: false, message: Error.m005 });

    if (
      (
        await isFound(
          UserMealPlanQuery.q005,
          ["UserId", "MealPlanId"],
          [Number, Number],
          [user, mealplan],
        )
      ).data
    )
      return res
        .status(401)
        .json({ data: false, message: "User has an active meal plan" });

    const response: UserMealPlan = (
      await GetService.byFields(
        UserMealPlanQuery.q004,
        ["UserId", "MealPlanId"],
        [Number, Number],
        [user, mealplan],
      )
    )[0];
    if (!response)
      return res.status(401).json({ data: false, message: Error.m011 });
    response.IsActive = isActive; // Set IsActive to true
    if (response.IsActive) response.DateActivated = new Date(); // Set DateActivated to current date
    if (
      !(await UpdateService.record(
        Number(response?.Id ?? 0),
        DBTable.t033,
        Object.keys(response),
        Object.values(response).map((val) => typeof val),
        Object.values(response),
      ))
    )
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("UserMealPlan-Controller [Activate]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
