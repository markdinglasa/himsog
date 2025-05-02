import { NextFunction, Request, Response } from "express";
import {
  NotificationTable,
  ProfessionValidationTable,
} from "../../../../types";
import {
  DBTable,
  Error,
  ProfessionValidationQuery,
  Success,
} from "../../../../shared";
import { ProfessionValidationValidator } from "../../../../validators";
import { AddService } from "../../../../services";
import { isFound } from "../../../../functions";

export const ProfessionValidationAdd = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: ProfessionValidationTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = ProfessionValidationValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    if (
      (
        await isFound(
          ProfessionValidationQuery.q004,
          ["UserId"],
          [Number],
          [Data.UserId],
        )
      ).data
    )
      return res.status(401).json({ data: false, message: Error.m016 }); // check duplicate
    Data.DateCreated = new Date();
    // Notify the user if account validation has been rejected.

    const nofifyOnReject: NotificationTable = {
      UserId: Data.UserId,
      Description: Data.IsValidated
        ? "Your account is now verified."
        : (Data?.Remarks ?? "Your account verification has been disapproved."),
      Link: "/n/settings",
      IsRead: false,
      DateCreated: new Date(),
    };
    const notify = await AddService.record(
      DBTable.t008,
      Object.keys(nofifyOnReject),
      Object.values(nofifyOnReject).map((val) => typeof val),
      Object.values(nofifyOnReject),
    );
    // console.log("notify:", notify);
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t026, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("ProfessionValidation-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
