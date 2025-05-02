import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { MealPlanRatings } from "../../../../types";

export const MealPlanRatingGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const RECORDS_PER_PAGE = 30;
    const page = parseInt(req.query.page as string, 10) || 1; // Default to page 1
    const MealPlanId = req.query.mealplan ? Number(req.query.mealplan) : 0; // Ensure user is a number
    const offset = (page - 1) * RECORDS_PER_PAGE;

    if (!MealPlanId || MealPlanId === 0 || MealPlanId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });

    let query =
      "SELECT mpr.*, CONCAT(u.`Firstname`, ' ', u.`Lastname` ) AS `UserFullname`, u.`ProfilePhoto` AS `UserPhoto` FROM `meal_plan_rating` AS mpr LEFT JOIN `user` AS u ON u.`Id` = mpr.`CreatedBy` WHERE `MealPlanId` = ?";
    let queryParams: any[] = [MealPlanId];
    query += ` ORDER BY DateCreated DESC LIMIT ${Math.max(1, RECORDS_PER_PAGE)} OFFSET ${Math.max(0, offset)}`;
    const response: MealPlanRatings = await GetService.byParams(
      query,
      queryParams,
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
