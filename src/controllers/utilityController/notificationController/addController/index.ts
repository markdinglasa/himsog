import { NextFunction, Request, Response } from "express";
import { NotificationTable } from "../../../../types";
import { DBTable, Error, Success } from "../../../../shared";
import { notificationValidator } from "../../../../validators";
import { AddService } from "../../../../services";
import { singleMailSender } from "../../../../functions";

export const NotificationAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: NotificationTable = req.body;
    Data.DateCreated = new Date();
    const { Email, ...filteredData } = Data;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = notificationValidator.validate({ ...filteredData });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    const Fields = Object.keys(filteredData);
    const Types = Object.values(filteredData).map((val) => typeof val);
    const Values = Object.values(filteredData);

    // NOTIFY THROUGH EMAIL IF EMAIL IS NAA
    if (Data?.Email) {
      const sendemail = singleMailSender(
        Data?.Email,
        "Event Validation",
        Data?.Description,
      );
      if (sendemail.data === false)
        return { data: false, message: sendemail.message || Error.m031 };
    }
    if (!(await AddService.record(DBTable.t008, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Notification-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
