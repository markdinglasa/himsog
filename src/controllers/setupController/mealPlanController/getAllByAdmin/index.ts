import { NextFunction, Request, Response } from "express";
import { DBTable, Error, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { MealPlanTables } from "../../../../types";

export const MealPlanGetAllByAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const response: MealPlanTables = await GetService.byTable(DBTable.t006);
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MealPlan-Controller [GetAllByAdmin]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
