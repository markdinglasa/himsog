import { NextFunction, Request, Response } from "express";
import { CertificateTable } from "../../../../types";
import { CertificateQuery, DBTable, Error, Success } from "../../../../shared";
import { certificateValidator } from "../../../../validators";
import { isFound } from "../../../../functions";
import { AddService } from "../../../../services";

export const CertificateAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: CertificateTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = certificateValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn
    if (
      (
        await isFound(
          CertificateQuery.q004,
          ["CertificateNumber"],
          [String],
          [Data.CertificateNumber],
        )
      ).data
    )
      return res.status(401).json({ data: false, message: Error.m043 }); // check duplicate CertificateNumber
    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t001, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Certificate-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
