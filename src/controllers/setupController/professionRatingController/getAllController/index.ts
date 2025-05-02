import { NextFunction, Request, Response } from "express";
import { Error, ProfessionQuery, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { ProfessionRatingQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { ProfessionRatingTables } from "../../../../types";

export const ProfessionRatingGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const RECORDS_PER_PAGE = 30;
    const page = parseInt(req.query.page as string, 10) || 1; // Default to page 1
    const NutritionistId = req.query.nutritionist
      ? Number(req.query.nutritionist)
      : 0; // Ensure user is a number
    const offset = (page - 1) * RECORDS_PER_PAGE;

    if (!NutritionistId || NutritionistId === 0 || NutritionistId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });

    let query =
      "SELECT pr.*, CONCAT(u.`Firstname`, ' ', u.`Lastname` ) AS `UserFullname`, u.`ProfilePhoto` AS `UserPhoto` FROM `profession_rating` AS pr LEFT JOIN `user` AS u ON u.`Id` = pr.`CreatedBy` WHERE pr.`UserId` = ?";
    let queryParams: any[] = [NutritionistId];
    query += ` ORDER BY DateCreated DESC LIMIT ${Math.max(1, RECORDS_PER_PAGE)} OFFSET ${Math.max(0, offset)}`;
    const response: ProfessionRatingTables = await GetService.byParams(
      query,
      queryParams,
    );

    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("ProfessionRating-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
