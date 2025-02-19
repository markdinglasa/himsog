import { NextFunction, Request, Response } from "express";
import { isDefault, isFound } from "../../../../functions";
import { DBTable, UserQuery, Error, Success } from "../../../../shared";
import { RemoveService } from "../../../../services";

export const UserRemoveController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id = parseInt(req.params.Id ?? 0);
    if (!Id || typeof Id !== "number")
      return res.status(401).json({ data: false, message: Error.m005 });
    if ((await isDefault(Id, DBTable.t016)).data)
      return res.status(401).json({ data: false, message: Error.m017 });
    if (!(await isFound(UserQuery.q006, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: false, message: Error.m011 }); // check user exists
    // if ((await isFound(UserQuery.q004, ["Id"], [Number], [Id])).data)
    //  return { data: false, message: Error.m020 }; // check user trnsactions
    if (!(await RemoveService.byId(Id, DBTable.t016)))
      return { data: false, message: Error.m002 };
    return { data: true, message: Success.m003 };
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("User-Controller [Remove]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
