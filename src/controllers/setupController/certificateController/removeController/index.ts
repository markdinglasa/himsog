import { NextFunction, Request, Response } from "express";
import { DBTable, Error, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { CertificateQuery } from "../../../../shared/";
import { RemoveService } from "../../../../services";

export const CertificateRemoveController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10); // CertificateId
    if (!Id || Id === 0 || Id === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(CertificateQuery.q002, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check Certificate existence
    const response = await RemoveService.byId(Id, DBTable.t001);
    return res.status(200).json({ data: response, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Certificate-Controller [Remove]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
