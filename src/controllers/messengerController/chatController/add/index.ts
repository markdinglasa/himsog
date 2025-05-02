import { NextFunction, Request, Response } from "express";
import { Chat, Convo } from "../../../../types";
import {
  ChatQuery,
  DBTable,
  Error,
  Success,
  UserQuery,
} from "../../../../shared";
import { chatValidator } from "../../../../validators";
import { AddService, GetService } from "../../../../services";
import { isFound } from "../../../../functions";

export const ChatAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: Chat = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = chatValidator.validate({
      ...Data,
    });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    if (
      (
        await isFound(
          ChatQuery.q004,
          ["AdvocateId", "NutritionistId"],
          [Number, Number],
          [Data.AdvocateId, Data.NutritionistId],
        )
      ).data
    )
      return res.status(401).json({ data: false, message: Error.m016 });
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    const response = await AddService.recordReturnData(
      DBTable.t035,
      Fields,
      Types,
      Values,
    );
    if (!response)
      return res.status(401).json({ data: false, message: Error.m002 });

    // Create convos for each party Advocate & Professional
    const advocateName = (
      await GetService.byFields(
        UserQuery.q002,
        ["Id"],
        [Number],
        [Data.AdvocateId],
      )
    )[0].Fullname;
    const nutritionistName = (
      await GetService.byFields(
        UserQuery.q002,
        ["Id"],
        [Number],
        [Data.NutritionistId],
      )
    )[0].Fullname;
    await AddService.records(
      DBTable.t036,
      ["ChatId", "UserId", "Name", "LastMessage", "DateCreated"],
      [
        [
          response.Id,
          Data.AdvocateId,
          advocateName ?? "Advocate",
          "New Contact",
          new Date(),
        ],
        [
          response.Id,
          Data.NutritionistId,
          nutritionistName ?? "Health Professional",
          "New Contact",
          new Date(),
        ],
      ],
    );

    return res.status(200).json({ data: response, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Chat-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
