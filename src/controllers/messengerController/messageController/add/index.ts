import { NextFunction, Request, Response } from "express";
import { Convo, Message } from "../../../../types";
import { DBTable, Error, MessageQuery, Success } from "../../../../shared";
import { messageValidator } from "../../../../validators";
import { AddService, GetService, UpdateService } from "../../../../services";

export const MessageAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: Message = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = messageValidator.validate({
      ...Data,
    });
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
    if (!(await AddService.record(DBTable.t037, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    const convoData: Convo = (
      await GetService.byFields(
        MessageQuery.q004,
        ["Id", "UserId"],
        [Number, Number],
        [Data.ChatId, Data.SenderId],
      )
    )[0];
    // UPDATE CONVO ON NEW MESSAGE
    await UpdateService.record(
      Number(convoData?.Id ?? 0),
      DBTable.t036,
      ["LastMessage", "DateUpdated"],
      [String, Date],
      [Data.Contents, new Date()],
    );
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Message-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
