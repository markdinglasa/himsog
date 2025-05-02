import { NextFunction, Request, Response } from "express";
import {
  Error,
  HealthConditionQuery,
  HealthQuery,
  Success,
} from "../../../../shared";
import { isFound } from "../../../../functions";
import { GetService } from "../../../../services";

export const HealthConditionGetAllController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const HealthId: number = parseInt(req.params?.Id as string, 10);
    if (!HealthId || HealthId === 0 || HealthId === undefined)
      return res
        .status(401)
        .json({ data: [], message: `${Error.m005} - ${req.params}` });
    if (!(await isFound(HealthQuery.q002, ["Id"], [Number], [HealthId])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check Health existence
    const response = await GetService.byFields(
      HealthConditionQuery.q001,
      ["HealthId"],
      [Number],
      [HealthId],
    );
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("HealthCondition-Controller [GetAll]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
