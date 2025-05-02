import { NextFunction, Request, Response } from "express";
import { Error, RecipeQuery, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { RecipeLineQuery } from "../../../../shared/";
import { GetService } from "../../../../services";

export const RecipeLineGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const RecipeId: number = parseInt(req.params?.Id, 10);
    if (!RecipeId || RecipeId === 0 || RecipeId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(RecipeQuery.q002, ["Id"], [Number], [RecipeId])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check Recipe existence
    const response = await GetService.byFields(
      RecipeLineQuery.q001,
      ["RecipeId"],
      [Number],
      [RecipeId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("RecipeLine-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
