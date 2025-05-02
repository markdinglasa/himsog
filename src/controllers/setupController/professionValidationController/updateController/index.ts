import { NextFunction, Request, Response } from "express";
import {
  NotificationTable,
  ProfessionValidationTable,
  UserTable,
} from "../../../../types";
import {
  DBTable,
  Error,
  Success,
  ProfessionValidationQuery,
  GenerateEmail,
} from "../../../../shared";
import { ProfessionValidationValidator } from "../../../../validators";
import { AddService, GetService, UpdateService } from "../../../../services";
import { isFound, singleMailSender } from "../../../../functions";

export const ProfessionValidationUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10),
      Data: ProfessionValidationTable = req.body;
    Data.DateUpdated = new Date();
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = ProfessionValidationValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn here
    if (
      !(await isFound(ProfessionValidationQuery.q002, ["Id"], [Number], [Id]))
        .data
    )
      return res.status(401).json({ data: false, message: Error.m011 }); // check existence

    const UserData: UserTable = (
      await GetService.byId(Data.UserId, DBTable.t016)
    )[0];
    if (!UserData)
      return res.status(401).json({ data: false, message: Error.m011 }); // check user existence

    // NOTIFY ON DISAPPROVE/APPROVE
    const notificaitonMessage: string = Data.IsValidated
      ? "Your account is now verified."
      : (Data?.Remarks ?? "Your account verification has been disapproved.");
    const nofifyOnReject: NotificationTable = {
      UserId: Data.UserId,
      Description: notificaitonMessage,
      Link: "/n/settings",
      IsRead: false,
      DateCreated: new Date(),
    };

    await AddService.record(
      DBTable.t008,
      Object.keys(nofifyOnReject),
      Object.values(nofifyOnReject).map((val) => typeof val),
      Object.values(nofifyOnReject),
    );

    const enotify = GenerateEmail(
      UserData?.Firstname ?? "Health Professional",
      notificaitonMessage,
    );
    singleMailSender(UserData.Email, "Himsog Account Verification", enotify);

    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await UpdateService.record(Id, DBTable.t026, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m004 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("ProfessionValidation-Controller [Update]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
