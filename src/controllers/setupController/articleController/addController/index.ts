import { NextFunction, Request, Response } from "express";
import { ArticleTable } from "../../../../types";
import { DBTable, Error, Success } from "../../../../shared";
import { articleValidator } from "../../../../validators";
import { AddService } from "../../../../services";

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
    console.error(error);
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0].message || Error.m029,
      });
    // Other Fn

    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t030, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
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
