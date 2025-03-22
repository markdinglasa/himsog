import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { ProfessionInstituteQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { ProfessionInstituteTable } from "../../../../types";

export const ProfessionInstituteGetController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10);
    if (!Id || Id === 0 || Id === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: ProfessionInstituteTable = (
      await GetService.byFields(
        ProfessionInstituteQuery.q003,
        ["Id"],
        [Number],
        [Id],
      )
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("ProfessionInstitute-Controller [Get]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
