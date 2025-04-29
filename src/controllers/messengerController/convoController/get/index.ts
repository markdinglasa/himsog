import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { ConvoQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { Convo } from "../../../../types";

export const ConvoGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10); // ConvoId
    if (!Id || Id === 0 || Id === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: Convo = (
      await GetService.byFields(ConvoQuery.q003, ["Id"], [Number], [Id])
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Convo-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
