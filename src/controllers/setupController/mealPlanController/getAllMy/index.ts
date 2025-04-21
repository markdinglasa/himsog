import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { MealPlanTables } from "../../../../types";

export const MealPlanGetAllMyController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const RECORDS_PER_PAGE = 30;
    const page = Math.max(1, parseInt(req.query.page as string, 10) || 1);
    const filter = req.query.filter ? String(req.query.filter) : "all";
    const offset = (page - 1) * RECORDS_PER_PAGE;
    const user = req.query.user ? Number(req.query.user) : 0; // User filter (if needed)

    const LEFT_JOIN_DATA =
      "LEFT JOIN `user` AS u ON u.`Id`= mp.`UserId` LEFT JOIN `payment` AS p ON p.`MealPlanId` = mp.`Id` AND p.`UserId` = ?";
    // Construct SQL Query with filters
    let query = `SELECT mp.Id, mp.UserId, mp.Name, mp.Description, mp.Type, mp.Diet, mp.Duration, mp.Price,u.ProfilePhoto AS UserImage, CONCAT(Firstname, ' ', IFNULL(NULLIF(Middlename, ''), ''), ' ', Lastname) AS UserFullname, CASE WHEN JSON_EXTRACT(p.MealPlanData, '$.Status') = true THEN 'Approved' WHEN JSON_EXTRACT(p.\`MealPlanData\`, '$.Status') = false THEN 'Pending' ELSE 'NA' END AS Status, COUNT(CASE WHEN JSON_EXTRACT(p.MealPlanData, '$.Status') = true THEN 1 ELSE null END) AS Sold FROM \`meal_plan\` AS mp ${LEFT_JOIN_DATA} WHERE JSON_EXTRACT(p.MealPlanData, '$.Status') = true ${filter === "all" ? "" : "AND \`Name\` LIKE ? "} GROUP BY mp.Id, mp.UserId, mp.Name, mp.Description, mp.Type, mp.Diet, mp.Duration, mp.Price, u.ProfilePhoto, CONCAT(Firstname, ' ', IFNULL(NULLIF(Middlename, ''), ''), ' ', Lastname), CASE WHEN JSON_EXTRACT(p.MealPlanData, '$.Status') = true THEN 'Approved' WHEN JSON_EXTRACT(p.\`MealPlanData\`, '$.Status') = false THEN 'Pending' ELSE 'NA' END LIMIT ${RECORDS_PER_PAGE} OFFSET ${offset}`;
    let queryParams = filter !== "all" ? [user, `%${filter}%`] : [user];

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
