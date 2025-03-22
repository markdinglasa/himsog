import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { CertificateQuery } from "../../../../shared/";
import { GetService } from "../../../../services";

export const CertificateGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const UserId: number = parseInt(req.params?.Id, 10);
    if (!UserId || UserId === 0 || UserId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response = await GetService.byFields(
      CertificateQuery.q001,
      ["UserId"],
      [Number],
      [UserId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Certificate-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
