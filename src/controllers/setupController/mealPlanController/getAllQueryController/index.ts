import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { MealPlanTables } from "../../../../types";

export const MealPlanGetWithQueryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const RECORDS_PER_PAGE = 30;
    const page = parseInt(req.query.page as string, 10) || 1; // Default to page 1
    const filter = req.query.filter ? String(req.query.filter) : ""; // Ensure filter is a string

    // Calculate OFFSET for pagination
    const offset = (page - 1) * RECORDS_PER_PAGE;

    // Construct SQL Query with filters
    let query = `SELECT * FROM \`meal_plan\` WHERE \`Name\` LIKE ?`;
    let queryParams: any[] = [`%${filter}%`];

    query += ` ORDER BY \`DateCreated\` DESC LIMIT ? OFFSET ?`;
    queryParams.push(Math.max(1, RECORDS_PER_PAGE), Math.max(0, offset));
    // console.log("Executing Query:", query);
    // console.log("Query Parameters:", queryParams);

    const response: MealPlanTables = await GetService.byParams(
      query,
      queryParams,
    );
    if (!response)
      return res.status(404).json({ data: [], message: Error.m011 });
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MealPlan-Controller [GetAllWithQuery]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};

/*
export const MealPlanGetWithQueryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const RECORDS_PER_PAGE = 30;
    const lastId = req.query.lastId ? Number(req.query.lastId) : null; // Cursor for pagination
    const filter = req.query.filter ? String(req.query.filter) : ""; // Filter MealPlans
    const user = req.query.user ? Number(req.query.user) : 0; // User filter (if needed)

    let query = "SELECT * FROM `MealPlan`";
    let queryParams: any[] = [];

    if (filter) {
      switch (filter) {
        case "past-MealPlans":
          query += " WHERE `ScheduleDate` < CURRENT_DATE";
          break;
        case "upcoming-MealPlans":
          query += " WHERE `ScheduleDate` > CURRENT_DATE";
          break;
        case "my-MealPlans":
          query += " WHERE `CreatedBy` = ?";
          queryParams.push(user);
          break;
      }
    }

    // Apply keyset pagination correctly
    if (lastId !== null) {
      query += filter ? " AND " : " WHERE ";
      query += "`Id` > ?";
      queryParams.push(lastId);
    }

    query += ` ORDER BY \`Id\` ASC LIMIT ${Math.max(1, RECORDS_PER_PAGE)}`;

    //console.log("Executing Query:", query);
    //console.log("Query Parameters:", queryParams);

    const response = await GetService.byParams(query, queryParams);

    return res.status(200).json({
      data: response,
      nextPageId: response.length > 0 ? response[response.length - 1].Id : null, // Cursor for next request
      message: Success.m005,
    });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MealPlan-Controller [GetAllWithQuery]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
*/
