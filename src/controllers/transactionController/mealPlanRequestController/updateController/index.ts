import { NextFunction, Request, Response } from "express";
import { MealPlanRequestTable } from "../../../../types";
import {
  MealPlanRequestQuery,
  DBTable,
  Error,
  Success,
} from "../../../../shared";
import { mealPlanRequestValidator } from "../../../../validators";
import { AddService, UpdateService } from "../../../../services";
import { isFound } from "../../../../functions";

export const MealPlanRequestUpdateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10),
      Data: MealPlanRequestTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = mealPlanRequestValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn here
    if (
      !(await isFound(MealPlanRequestQuery.q002, ["Id"], [Number], [Id])).data
    )
      return res.status(401).json({ data: false, message: Error.m011 }); // check existence
    Data.DateUpdated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await UpdateService.record(Id, DBTable.t007, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    if (Data?.MealPlanId) {
      // notify nutritionist
      await AddService.record(
        DBTable.t008,
        ["UserId", "Description", "Link", "IsRead", "DateCreated"],
        [Number, String, String, Boolean, Date],
        [
          Data?.AdvocateId ?? 0,
          "Your meal-plan request has been granted",
          `/c/request/d/${Id}`,
          false,
          new Date(),
        ],
      );
    }
    return res.status(200).json({ data: true, message: Success.m004 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MealPlanRequest-Controller [Update]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
