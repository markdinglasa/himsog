import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { MessageQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { Messages } from "../../../../types";

export const MessageGetAllByChatController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const ConvoId: number = parseInt(req.params?.Id, 10); // MessageId
    if (!ConvoId || ConvoId === 0 || ConvoId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: Messages = (
      await GetService.byFields(
        MessageQuery.q001,
        ["ConvoId"],
        [Number],
        [ConvoId],
      )
    )[0];
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
