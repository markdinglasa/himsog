import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { HealthQuery } from "../../../../shared/";
import { GetService } from "../../../../services";

export const HealthGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10); // HealthId
    if (!Id || Id === 0 || Id === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response = await GetService.byFields(
      HealthQuery.q001,
      ["UserId"],
      [Number],
      [Id],
    );
    return res.status(200).json({ data: response[0], message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Health-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
