import { NextFunction, Request, Response } from "express";
import {
  PaymentTable,
  SubscriptionLineTable,
  SubscriptionTable,
} from "../../../../types";
import { DBTable, Error, PaymentQuery, Success } from "../../../../shared";
import { paymentValidator } from "../../../../validators";
import { AddService, GetService } from "../../../../services";
import { formatDateToYYYYMMDD } from "../../../../utils";
import { isFound } from "../../../../functions";

export const PaymentAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: PaymentTable = req.body;
    // console.log(Data);
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const Subscription: SubscriptionTable = (
      await GetService.byId(Data?.SubscriptionId ?? 0, DBTable.t014)
    )[0];
    const { error } = paymentValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    Data.DateCreated = new Date();

    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);

    // validate user if he/she already have an active subscription
    if (await isFound(PaymentQuery.q004, ["UserId"], [Number], [Data.UserId]))
      return res.status(401).json({ data: false, message: Error.m048 });

    const Verified: SubscriptionLineTable = {
      SubscriptionId: Data?.SubscriptionId || 0,
      UserId: Data?.UserId || 0,
      DateStart: formatDateToYYYYMMDD(new Date().toString()),
      DateEnd: formatDateToYYYYMMDD(
        new Date(
          new Date().setDate(
            new Date().getDate() + (Subscription?.Duration || 0),
          ),
        ).toString(),
      ), // duration is a number of days
      DateCreated: new Date(),
      IsCancelled: false,
    };
    if (
      !(await AddService.record(
        DBTable.t015,
        Object.keys(Verified),
        Object.values(Verified).map((val) => typeof val),
        Object.values(Verified),
      ))
    )
      return res.status(401).json({ data: false, message: Error.m002 });
    if (!(await AddService.record(DBTable.t010, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Payment-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
