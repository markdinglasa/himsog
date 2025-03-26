import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { ArticleQuery } from "../../../../shared/";
import { GetService } from "../../../../services";

export const ArticleGetAllValidatedController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const response = await GetService.byQuery(ArticleQuery.q005);
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Article-Controller [GetAllValdiated]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
