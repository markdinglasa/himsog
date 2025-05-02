import { NextFunction, Request, Response } from "express";
import { ConvoQuery, DBTable, Error, Success } from "../../../../shared";
import { GetService, UpdateService } from "../../../../services";
import { isFound } from "../../../../functions";
import { Convo } from "../../../../types";

export const ConvoMarkAsReadController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10); //ConvoId
    const convo: Convo = (await GetService.byId(Id, DBTable.t036))[0];
    if (!convo)
      return res.status(401).json({ data: false, message: Error.m011 }); // check existence
    await UpdateService.recordByCondition(
      DBTable.t037,
      ["IsRead"],
      [Boolean],
      [true],
      "ChatId = ? AND SenderId = ?",
      [convo.ChatId, convo.UserId],
    );
    return res.status(200).json({ data: true, message: Success.m004 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Convo-Controller [MarkAsRead]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
