import { NextFunction, Request, Response } from "express";
import { Error, ProfessionQuery, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { CertificateQuery } from "../../../../shared/";
import { GetService } from "../../../../services";

export const CertificateGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const ProfessionId: number = parseInt(req.params?.Id, 10);
    if (!ProfessionId || ProfessionId === 0 || ProfessionId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (
      !(await isFound(ProfessionQuery.q002, ["Id"], [Number], [ProfessionId]))
        .data
    )
      return res.status(401).json({ data: [], message: Error.m011 }); // check Profession existence
    const response = await GetService.byFields(
      CertificateQuery.q001,
      ["ProfessionId"],
      [Number],
      [ProfessionId],
    );
    return res.status(200).json({ data: response, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Certificate-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
