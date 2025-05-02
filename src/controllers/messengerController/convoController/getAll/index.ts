import { NextFunction, Request, Response } from "express";
import { Error, Success } from "../../../../shared";
import { ConvoQuery } from "../../../../shared/";
import { GetService } from "../../../../services";
import { Convos } from "../../../../types";

export const ConvoGetAllByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const UserId: number = parseInt(req.params?.Id, 10); // ConvoId
    const IsAdvocate: number = parseInt(req.params?.IsAdvocate, 10); // ConvoId

    const query: string = Boolean(IsAdvocate)
      ? ConvoQuery.q004
      : ConvoQuery.q005;
    if (!UserId || UserId === 0 || UserId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    const response: Convos = await GetService.byFields(
      query,
      Boolean(IsAdvocate)
        ? ["SenderId", "AdvocateId", "UserId"]
        : ["SenderId", "NutritionistId", "UserId"],
      [Number, Number, Number],
      [UserId, UserId, UserId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Convo-Controller [GetAllByChat]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
