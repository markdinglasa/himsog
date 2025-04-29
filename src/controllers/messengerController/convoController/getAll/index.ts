import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { ConvoQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { Convos } from "../../../../types";

export const ConvoGetAllByChatController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const ChatId: number = parseInt(req.params?.Id, 10); // ConvoId
    if (!ChatId || ChatId === 0 || ChatId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: Convos = (
      await GetService.byFields(ConvoQuery.q001, ["ChatId"], [Number], [ChatId])
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Convo-Controller [GetAllByChat]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
