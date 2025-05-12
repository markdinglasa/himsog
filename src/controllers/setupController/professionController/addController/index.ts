import { NextFunction, Request, Response } from "express";
import { ProfessionTable, UserTable } from "../../../../types";
import { DBTable, Error, Success, UserQuery } from "../../../../shared";
import { professionValidator } from "../../../../validators";
import { AddService, GetService } from "../../../../services";
import { OPENAI_KEY } from "../../../../config";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: OPENAI_KEY });

export const ProfessionAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: ProfessionTable = req.body;

    if (!Data)
      return res.status(400).json({ data: false, message: Error.m014 });

    const { error } = professionValidator.validate(Data);
    if (error)
      return res.status(400).json({
        data: false,
        message: error.details[0]?.message || Error.m029,
      });

    const user = (
      await GetService.byFields(UserQuery.q002, ["Id"], [Number], [Data.UserId])
    )[0];

    if (!user)
      return res.status(404).json({
        data: false,
        message: "User not found for the given UserId.",
      });

    if (!OPENAI_KEY) {
      return res.status(500).json({
        data: false,
        message: "OpenAI API key is not set in environment variables.",
      });
    }

    const prompt = `
    You are a strict certificate validation assistant. Based on the information provided, answer only "true" if you are confident that this professional certificate is verifiable from known public sources or repositories. Otherwise, answer "false".

    Professional Details:
    Name: ${user.Fullname}
    Issuer: ${Data.Issuer}
    Title: ${Data.Title}

    return true or false only.
    `;
    console.log(prompt);
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4.1-mini", // or "gpt-4o.mini" /
      messages: [
        { role: "system", content: "You are a certificate validator." },
        { role: "user", content: prompt },
      ],
      temperature: 0,
    });
    console.log(aiResponse.choices?.[0]);
    const content = aiResponse.choices?.[0]?.message?.content
      ?.trim()
      .toLowerCase();

    if (content !== "true") {
      return res.status(401).json({
        data: false,
        message: "This certificate is not valid or cannot be verified.",
      });
    }

    Data.DateCreated = new Date();
    const Fields = Object.keys(Data);
    const Types = Object.values(Data).map((val) => typeof val);
    const Values = Object.values(Data);
    if (!(await AddService.record(DBTable.t011, Fields, Types, Values)))
      return res.status(401).json({ data: false, message: Error.m002 });
    return res.status(200).json({ data: true, message: Success.m002 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Profession-Controller [Add]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: false, message: error.message || Error.m001 });
  }
};
