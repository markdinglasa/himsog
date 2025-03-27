import { NextFunction, Request, Response } from "express";
import { ProfessionTable } from "../../../../types";
import { ProfessionQuery, DBTable, Error, Success } from "../../../../shared";
import { professionValidator } from "../../../../validators";
import { UpdateService } from "../../../../services";
import { isFound } from "../../../../functions";

export const ProfessionUpdateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10),
      Data: ProfessionTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = professionValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn here
    if (!(await isFound(ProfessionQuery.q002, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: false, message: Error.m011 }); // check existence
    if (
      (
        await isFound(
          ProfessionQuery.q005,
          ["Id", "UserId"],
          [Number, Number],
          [Id, Data.UserId],
        )
      ).data
    )
      return res.status(401).json({ data: false, message: Error.m043 }); // check duplicate Profession
    Data.DateIssued = new Date(Data.DateIssued);
    Data.DateExpired = new Date(Data.DateExpired);
    Data.DateUpdated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await UpdateService.record(Id, DBTable.t011, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m004 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Profession-Controller [Update]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
