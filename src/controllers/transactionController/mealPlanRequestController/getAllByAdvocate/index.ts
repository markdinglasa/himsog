import { NextFunction, Request, Response } from "express";
import { Error, Success, UserQuery } from "../../../../shared";
import { MealPlanRequestQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { isFound } from "../../../../functions";

export const MealPlanRequestGetAllByAdvocateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const AdovateId: number = parseInt(req.params?.Id, 10); // AdovateId
    if (!AdovateId || AdovateId === 0 || AdovateId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(UserQuery.q002, ["Id"], [Number], [AdovateId])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check User existence
    const response = await GetService.byFields(
      MealPlanRequestQuery.q001,
      ["AdovateId"],
      [Number],
      [AdovateId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error(
      "MealPlanRequest-Controller [GetAllByAdvocate]:",
      error.message,
    );
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
