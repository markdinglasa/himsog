import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { ChatQuery } from "../../../../shared";
import { GetService } from "../../../../services";
import { Chats } from "../../../../types";

export const ChatGetAllByAdvocateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const AdvocateId: number = parseInt(req.params?.Id, 10); // ChatId
    if (!AdvocateId || AdvocateId === 0 || AdvocateId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: Chats = (
      await GetService.byFields(
        ChatQuery.q001,
        ["AdvocateId", "NutritionistId"],
        [Number, Number],
        [AdvocateId, AdvocateId],
      )
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Chat-Controller [GetAllByAdvocateId]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
