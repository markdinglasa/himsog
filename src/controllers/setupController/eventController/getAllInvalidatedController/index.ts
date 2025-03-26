import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { EventQuery } from "../../../../shared";
import { GetService } from "../../../../services";

export const EventGetAllInValidatedController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const response = await GetService.byQuery(EventQuery.q004);
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Event-Controller [GetAllInValidated]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
