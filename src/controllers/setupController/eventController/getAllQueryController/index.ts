import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { EventTables } from "../../../../types";

export const EventGetWithQueryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const RECORDS_PER_PAGE = 30;
    const page = parseInt(req.query.page as string, 10) || 1; // Default to page 1
    const filter = req.query.filter ? String(req.query.filter) : ""; // Ensure filter is a string
    const user = req.query.user ? Number(req.query.user) : 0; // Ensure user is a number

    // Calculate OFFSET for pagination
    const offset = (page - 1) * RECORDS_PER_PAGE;

    // Construct SQL Query with filters
    let query = "SELECT * FROM event WHERE `IsValidated` = true";
    let queryParams: any[] = [];

    if (filter) {
      switch (filter) {
        case "past-events":
          query += " AND ScheduleDate < CURRENT_DATE";
          break;
        case "upcoming-events":
          query += " AND ScheduleDate > CURRENT_DATE";
          break;
        case "my-events":
          query += " AND CreatedBy = ?";
          queryParams.push(user);
          break;
        default:
          query += "";
          break;
      }
    }

    query += ` LIMIT ${Math.max(1, RECORDS_PER_PAGE)} OFFSET ${Math.max(0, offset)}`;
    // console.log("Executing Query:", query);
    // console.log("Query Parameters:", queryParams);

    const response: EventTables = await GetService.byParams(query, queryParams);
    if (!response)
      return res.status(404).json({ data: [], message: Error.m011 });
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Event-Controller [GetAllWithQuery]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};

/*
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
*/
