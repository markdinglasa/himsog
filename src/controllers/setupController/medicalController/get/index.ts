import { NextFunction, Request, Response } from "express";
import { Error, MedicalQuery, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { MedicalTable } from "../../../../types";

export const MedicalGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const UserId: number = parseInt(req.params?.Id, 10); // MedicalId
    if (!UserId || typeof UserId !== "number")
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: MedicalTable = (
      await GetService.byFields(
        MedicalQuery.q001,
        ["UserId"],
        [Number],
        [UserId],
      )
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Medical-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
