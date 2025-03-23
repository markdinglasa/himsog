import { NextFunction, Request, Response } from "express";
import { Error, ProfessionSpecialistQuery, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { ProfessionSpecialistTables } from "../../../../types";

export const ProfessionSpecialistGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const UserId: number = parseInt(req.params?.Id, 10);
    const response: ProfessionSpecialistTables = await GetService.byFields(
      ProfessionSpecialistQuery.q001,
      ["UserId"],
      [Number],
      [UserId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("ProfessionSpecialist-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
