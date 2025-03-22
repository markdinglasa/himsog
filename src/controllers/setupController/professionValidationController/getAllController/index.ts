import { NextFunction, Request, Response } from "express";
import {
  Error,
  ProfessionValidationQuery,
  Success,
  UserQuery,
} from "../../../../shared";
import { isFound } from "../../../../functions";
import { GetService } from "../../../../services";
import { ProfessionValidationTables } from "../../../../types";

export const ProfessionValidationGetAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const UserId: number = parseInt(req.params?.Id, 10);
    if (!UserId || UserId === 0 || UserId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(UserQuery.q001, ["Id"], [Number], [UserId])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check User existence
    const response: ProfessionValidationTables = await GetService.byFields(
      ProfessionValidationQuery.q001,
      ["UserId"],
      [Number],
      [UserId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("ProfessionValidation-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
