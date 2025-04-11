import { NextFunction, Request, Response } from "express";
import { RequestAccessTable } from "../../../../types";
import {
  RequestAccessQuery,
  DBTable,
  Error,
  Success,
  GenerateEmail,
} from "../../../../shared";
import { requestAccessValidator } from "../../../../validators";
import { UpdateService } from "../../../../services";
import { GenerateFn, isFound, singleMailSender } from "../../../../functions";

export const RequestAccessUpdateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Id: number = parseInt(req.params?.Id, 10),
      Data: RequestAccessTable = req.body;
    if (!Data || Data === null || Data === undefined)
      return res.status(401).json({ data: false, message: Error.m014 });
    const { error } = requestAccessValidator.validate({ ...Data });
    if (error)
      return res.status(401).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });
    // Other Fn here
    if (!(await isFound(RequestAccessQuery.q002, ["Id"], [Number], [Id])).data)
      return res.status(401).json({ data: false, message: Error.m011 }); // check existence+

    if (Data?.IsApproved ?? false) {
      // SEND THE TOKEN-LINK OF ANY ARTICLE/EVENT
      const IsEvent = Data?.EventId ? true : false;
      const Token: string = (await GenerateFn.accessToken("0")).data;
      const HTMLEmail = GenerateEmail(
        Data?.Email,
        `Kindly click the link to create a http://localhost:5173/${IsEvent ? "event" : "health-article"}/new/token=${Token} this token is valid only for 1hour.`,
      );
      if (Data?.Email) {
        const sendemail = singleMailSender(
          Data?.Email,
          `Request Access to ${IsEvent ? "Event" : "Article"}`,
          HTMLEmail,
        );
        if (sendemail.data === false)
          return { data: false, message: sendemail.message || Error.m031 };
      }
    } else {
      // SEND THE DISAPPROVE REMARKS
      const HTMLEmail = GenerateEmail(
        Data?.Email,
        Data?.Remarks ?? "Your request has been disapproved. ",
      );
      const sendemail = singleMailSender(
        Data?.Email,
        `Request Access was Disapproved`,
        HTMLEmail,
      );
      if (sendemail.data === false)
        return { data: false, message: sendemail.message || Error.m031 };
    }

    Data.DateUpdated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);

    if (!(await UpdateService.record(Id, DBTable.t025, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });

    return res.status(200).json({ data: true, message: Success.m004 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("RequestAccess-Controller [Update]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
