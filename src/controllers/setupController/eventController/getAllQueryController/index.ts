import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { GetService } from "../../../../services";
export const EventGetWithQueryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const RECORDS_PER_PAGE = 30;
    const lastId = req.query.lastId ? Number(req.query.lastId) : null; // Cursor for pagination
    const filter = req.query.filter ? String(req.query.filter) : ""; // Filter events
    const user = req.query.user ? Number(req.query.user) : 0; // User filter (if needed)

    let query = "SELECT * FROM `event`";
    let queryParams: any[] = [];

    if (filter) {
      switch (filter) {
        case "past-events":
          query += " WHERE `ScheduleDate` < CURRENT_DATE";
          break;
        case "upcoming-events":
          query += " WHERE `ScheduleDate` > CURRENT_DATE";
          break;
        case "my-events":
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
    logging.error("Event-Controller [GetAllWithQuery]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
