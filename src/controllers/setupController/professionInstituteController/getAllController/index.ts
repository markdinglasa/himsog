import { NextFunction, Request, Response } from "express";
import { Error, ProfessionInstituteQuery, Success } from "../../../../shared";
import { GetService } from "../../../../services";
import { ProfessionInstituteTables } from "../../../../types";

export const ProfessionInstituteGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const UserId: number = parseInt(req.params?.Id, 10);
    const response: ProfessionInstituteTables = await GetService.byFields(
      ProfessionInstituteQuery.q001,
      ["UserId"],
      [Number],
      [UserId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("ProfessionInstitute-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
