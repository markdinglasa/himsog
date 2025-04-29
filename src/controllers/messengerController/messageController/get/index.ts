import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { MessageQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { Message } from "../../../../types";

export const MessageGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10); // MessageId
    if (!Id || Id === 0 || Id === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: Message = (
      await GetService.byFields(MessageQuery.q003, ["Id"], [Number], [Id])
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Message-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
