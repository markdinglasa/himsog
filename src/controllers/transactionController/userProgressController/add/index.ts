import { NextFunction, Request, Response } from "express";
import { UserProgress } from "../../../../types";
import { DBTable, Error, Success, UserProgressQuery } from "../../../../shared";
import { userProgressValidator } from "../../../../validators";
import { AddService } from "../../../../services";
import { isFound } from "../../../../functions";

export const UserProgressAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: UserProgress = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = userProgressValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    if (
      (
        await isFound(
          UserProgressQuery.q004,
          ["UserMealPlanId", "UserMealPlanId"],
          [Number, Number],
          [Data.UserMealPlanId, Data.UserMealPlanId],
        )
      ).data
    )
      return res
        .status(401)
        .json({ data: false, message: "Already submitted a weekly progress" });
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t038, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("UserProgress-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
