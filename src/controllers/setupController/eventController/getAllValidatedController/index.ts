import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { EventQuery } from "../../../../shared";
import { GetService } from "../../../../services";

export const EventGetAllValidatedController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const response = await GetService.byQuery(EventQuery.q005);
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Event-Controller [GetAllValidated]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
