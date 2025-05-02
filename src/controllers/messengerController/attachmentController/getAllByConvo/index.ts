import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { AttachmentQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { Attachments } from "../../../../types";

export const AttachmentGetAllByConvoController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const ConvoId: number = parseInt(req.params?.Id, 10); // AttachmentId
    if (!ConvoId || ConvoId === 0 || ConvoId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: Attachments = (
      await GetService.byFields(
        AttachmentQuery.q001,
        ["ConvoId"],
        [Number],
        [ConvoId],
      )
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Attachment-Controller [GetAllByConvo]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
