import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { MessageQuery } from "../../../../shared";
import { GetService } from "../../../../services";
import { Messages } from "../../../../types";

export const MessageGetAllByChatController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const ChatId: number = parseInt(req.params?.ChatId, 10); // Chatid
    const UserId: number = parseInt(req.params?.UserId, 10); // Chatid
    if (!ChatId || ChatId === 0 || ChatId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: Messages = await GetService.byFields(
      MessageQuery.q001,
      ["ChatId"],
      [Number],
      [ChatId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Message-Controller [GetAllByChat]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
