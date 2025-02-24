import { NextFunction, Request, Response } from "express";
import { DBTable, Error, Success } from "../../../../shared";
import { isFound } from "../../../../functions";
import { IngredientQuery } from "../../../../shared/";
import { RemoveService } from "../../../../services";

export const IngredientRemoveController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10); // IngredientId
    if (!Id || Id === 0 || Id === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(IngredientQuery.q002, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check Ingredient existence
    if ((await isFound(IngredientQuery.q004, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: [], message: Error.m020 }); // check Ingredient transactions or in used

    if (!(await RemoveService.byId(Id, DBTable.t019)))
      return { data: false, message: Error.m002 };
    return res.status(200).json({ data: true, message: Success.m003 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Ingredient-Controller [Remove]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
