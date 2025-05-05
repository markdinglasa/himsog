import { NextFunction, Request, Response } from "express";
import { Error, Success, UserMealPlanQuery } from "../../../../shared";
import { GetService } from "../../../../services";
import { UserProgresses } from "../../../../types";

export const UserProgressGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const UserMealPlanId: number = parseInt(req.params?.Id, 10);
    if (!UserMealPlanId || UserMealPlanId === 0 || UserMealPlanId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: UserProgresses = await GetService.byFields(
      UserMealPlanQuery.q001,
      ["UserMealPlanId"],
      [Number],
      [UserMealPlanId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("UserProgress-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
