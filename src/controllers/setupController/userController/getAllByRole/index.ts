import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { MealPlanTables, UserRole } from "../../../../types";

export const UserGetByRoleController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const RECORDS_PER_PAGE = 30;
    const page = Math.max(1, parseInt(req.query.page as string, 10) || 1);
    const filter = req.query.filter ? String(req.query.filter) : "all";
    const expertise = req.query.expertise ? String(req.query.expertise) : "";
    const role = req.query.role
      ? String(req.query.role)
      : UserRole.NUTRITIONIST;
    const offset = (page - 1) * RECORDS_PER_PAGE;
    // sample experise data is Plant%20Based%20Diets%20Prenatal%20Nutrition%20Hearth%20Health%20Gut%20Health%20Pediatric%20Nutrition
    // Construct SQL Query with filters
    let query = `SELECT u.Id, u.Email, CONCAT(u.Firstname, u.Lastname) AS Fullname, u.Role, u.ProfilePhoto, SUM(NULLIF(pr.Rating,0)) AS Rating 
                 FROM \`user\` AS u 
                 LEFT JOIN \`profession_rating\` AS pr ON pr.UserId = u.Id 
                 LEFT JOIN \`specialist\` AS s ON s.UserId = u.Id 
                 WHERE u.Role = ?`;
    const queryParams: (string | number)[] = [role];

    if (filter !== "all") {
      query += " AND (\`Firstname\` LIKE ? OR \`Lastname\` LIKE ?)";
      queryParams.push(`%${filter}%`, `%${filter}%`);
    }
    if (expertise.length > 0) {
      query += " AND s.Title LIKE ?";
      queryParams.push(`%${expertise}%`);
    }
    query += ` GROUP BY u.Id, u.Email, CONCAT(u.Firstname, u.Lastname), u.ProfilePhoto, u.Role 
               LIMIT ${RECORDS_PER_PAGE} OFFSET ${offset}`;

    /*console.log("Executing Query:", query);
    console.log(
      "Query Parameters (with types):",
      queryParams.map((p) => `${p} (${typeof p})`),
    );
    console.log("Expertise:", expertise);*/

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
