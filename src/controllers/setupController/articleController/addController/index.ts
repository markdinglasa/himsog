import { NextFunction, Request, Response } from "express";
import { ArticleTable } from "../../../../types";
import { DBTable, Error, Success } from "../../../../shared";
import { articleValidator } from "../../../../validators";
import { AddService, UpdateService } from "../../../../services";

export const ArticleAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: ArticleTable = req.body;
    //console.log(Data);

    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = articleValidator.validate({ ...Data });
    // console.error(error);
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0].message || Error.m029,
      });
    // Other Fn

    Data.DateCreated = new Date();
    const { RequestAccessId, ...filtered } = Data;
    const Fields = Object.keys(filtered);
    const Types = Object.values(filtered).map((val) => typeof val);
    const Values = Object.values(filtered);
    const response = await AddService.recordReturnData(
      DBTable.t030,
      Fields,
      Types,
      Values,
    );

    if (!response)
      return res.status(401).json({ data: false, message: Error.m002 });
    if (Number(Data?.RequestAccessId) > 0) {
      await UpdateService.record(
        Data?.RequestAccessId,
        DBTable.t025,
        ["ArticleId"],
        [Number],
        [response?.Id ?? 0],
      );
    } // UPDATE REQUEST ACCESS

    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Article-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
