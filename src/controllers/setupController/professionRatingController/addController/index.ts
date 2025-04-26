import { NextFunction, Request, Response } from "express";
import { NotificationTable, ProfessionRatingTable } from "../../../../types";
import {
  DBTable,
  Error,
  ProfessionRatingQuery,
  Success,
} from "../../../../shared";
import { professionRatingValidator } from "../../../../validators";
import { AddService } from "../../../../services";
import { isFound } from "../../../../functions";

export const ProfessionRatingAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: ProfessionRatingTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = professionRatingValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    if (
      (
        await isFound(
          ProfessionRatingQuery.q003,
          ["UserId", "CreatedBy"],
          [Number, Number],
          [Data?.UserId, Data?.CreatedBy],
        )
      ).data
    )
      return res.status(401).json({
        data: false,
        message: "You already written a review on this health professional",
      });
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t012, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    const NotifyProfessional: NotificationTable = {
      UserId: Data?.UserId || 0,
      Description: "Someone rate your profile",
      Link: `/n/profile/${Data?.UserId}`,
      IsRead: false,
    };
    await AddService.record(
      DBTable.t008,
      Object.keys(NotifyProfessional),
      Object.values(NotifyProfessional).map((val) => typeof val),
      Object.values(NotifyProfessional),
    );
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("ProfessionRating-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
