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
    const page = Math.max(1, parseInt(req.query.page as string, 10) || 1);
    const filter = req.query.filter ? String(req.query.filter) : "all";
    const offset = (page - 1) * RECORDS_PER_PAGE;

    const LEFT_JOIN_DATA = "LEFT JOIN `user` AS u ON u.`Id`= mp.`UserId` ";
    // Construct SQL Query with filters
    let query = `SELECT mp.*, u.ProfilePhoto AS UserImage, CONCAT(Firstname, ' ', IFNULL(NULLIF(Middlename, ''), ''), ' ', Lastname) AS UserFullname FROM \`meal_plan\` AS mp ${LEFT_JOIN_DATA} ${filter === "all" ? "" : "WHERE \`Name\` LIKE ? "} LIMIT ${RECORDS_PER_PAGE} OFFSET ${offset}`;
    let queryParams = filter !== "all" ? [`%${filter}%`] : [];

    /*console.log("Executing Query:", query);
    console.log(
      "Query Parameters (with types):",
      queryParams.map((p) => `${p} (${typeof p})`),
    );*/

    const response: MealPlanTables = await GetService.byParams(
      query,
      queryParams,
    );

    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.error("MealPlan-Controller [GetAllWithQuery]:", error);
    return res.status(500).json({
      data: [],
      message: error.message || Error.m001,
    });
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
