import { NextFunction, Request, Response } from "express";
import { Error, ProfessionValidationQuery, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { ProfessionValidationTable } from "../../../../types";

export const ProfessionValidationGetByUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const UserId: number = parseInt(req.params?.Id, 10); // ProfessionRatingId
    if (!UserId || UserId === 0 || UserId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: ProfessionValidationTable = (
      await GetService.byFields(
        ProfessionValidationQuery.q004,
        ["UserId"],
        [Number],
        [UserId],
      )
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error(
      "ProfessionValidation-Controller [GetByUser]:",
      error.message,
    );
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
