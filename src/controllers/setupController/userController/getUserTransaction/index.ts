import { NextFunction, Request, Response } from "express";
import { Success, UserQuery, Error } from "../../../../shared";
import { isFound } from "../../../../functions";
import { GetService } from "../../../../services";

export const UserHasTransactionController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const NutritionistId = parseInt(req.params.NutritionistId ?? 0);
    const AdvocateId = parseInt(req.params.AdvocateId ?? 0);
    if (!AdvocateId || typeof AdvocateId !== "number")
      return res.status(401).json({ data: false, message: Error.m005 });
    if (!(await isFound(UserQuery.q006, ["Id"], [Number], [AdvocateId])).data)
      return res.status(401).json({ data: false, message: Error.m011 });
    const response = (
      await GetService.byFields(
        UserQuery.q008,
        ["UserId", "UserId"],
        [Number, Number],
        [AdvocateId, NutritionistId],
      )
    )[0];
    return res.status(200).json({ data: response, message: Success.m001 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("User-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
