import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { ArticleTables } from "../../../../types";

export const ArticleGetWithQueryController = async (
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
    let query = "SELECT * FROM `article` WHERE `IsValidated` = true";
    let queryParams: any[] = [];

    if (filter) {
      switch (filter) {
        case "week":
          query += " AND YEARWEEK(`DatePosted`, 1) = YEARWEEK(CURRENT_DATE, 1)";
          break;
        case "month":
          query +=
            " AND MONTH(`DatePosted`) = MONTH(CURRENT_DATE) AND YEAR(`DatePosted`) = YEAR(CURRENT_DATE)";
          break;
        case "my":
          query += " AND CreatedBy = ?";
          queryParams.push(user);
          break;
        default:
          query += "";
          break;
      }
    }

    query += ` ORDER BY DatePosted DESC LIMIT ${Math.max(1, RECORDS_PER_PAGE)} OFFSET ${Math.max(0, offset)}`;
    // console.log("Executing Query:", query);
    // console.log("Query Parameters:", queryParams);

    const response: ArticleTables = await GetService.byParams(
      query,
      queryParams,
    );
    if (!response)
      return res.status(404).json({ data: [], message: Error.m011 });
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Article-Controller [GetAllWithQuery]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
