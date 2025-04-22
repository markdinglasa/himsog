import { NextFunction, Request, Response } from "express";
import { NotificationTable, PaymentTable } from "../../../../types";
import { PaymentQuery, DBTable, Error, Success } from "../../../../shared";
import { paymentValidator } from "../../../../validators";
import { AddService, UpdateService } from "../../../../services";
import { isFound } from "../../../../functions";

export const PaymentUpdateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10),
      Data: PaymentTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = paymentValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn here
    if (!(await isFound(PaymentQuery.q002, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: false, message: Error.m011 }); // check existence
    Data.DateUpdated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await UpdateService.record(Id, DBTable.t010, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    //console.log("Status", Data);
    if (Boolean(Data.IsMealPlan) && Boolean(Data?.MealPlanData?.Status)) {
      // ADD TO USER MEAL PLAN FOR TRANSACTION RECORD
      await AddService.record(
        DBTable.t033,
        ["UserId", "MealPlanId", "IsActive", "DateCreated"],
        [Number, Number, Boolean, Date],
        [Data.UserId, Data.MealPlanId, false, new Date()],
      ); // add to user meal plan table
      // NOTIFY USER ON APPROVAL OF MEAL PLAN
      const Notify: NotificationTable = {
        UserId: Data.UserId,
        Description: "Your meal plan has been approved.",
        Link: `/c/meal-plan/d/${Data.MealPlanId}`,
        IsRead: false,
        DateCreated: new Date(),
      };
      await AddService.record(
        DBTable.t008,
        Object.keys(Notify),
        Object.values(Notify).map((val) => typeof val),
        Object.values(Notify),
      );
    }
    if (
      Boolean(Data.IsMealPlan) &&
      Boolean(Data?.MealPlanData?.IsDisapproved)
    ) {
      // NOTIFY USER ON DISAPPROVAL OF MEAL PLAN
      const Notify: NotificationTable = {
        UserId: Data.UserId,
        Description: "Your meal plan has been disapproved.",
        Link: `/c/meal-plan/d/${Id}`,
        IsRead: false,
        DateCreated: new Date(),
      };
      await AddService.record(
        DBTable.t008,
        Object.keys(Notify),
        Object.values(Notify).map((val) => typeof val),
        Object.values(Notify),
      );
    }

    return res.status(200).json({ data: true, message: Success.m004 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Payment-Controller [Update]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
