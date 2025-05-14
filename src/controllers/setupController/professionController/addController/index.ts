import { NextFunction, Request, Response } from "express";
import { ProfessionTable, UserTable } from "../../../../types";
import { DBTable, Error as err, Success, UserQuery } from "../../../../shared";
import { professionValidator } from "../../../../validators";
import { AddService, GetService } from "../../../../services";
import { OPENAI_KEY, SERPAPI_KEY } from "../../../../config"; // Removed SCRAPPER_API_KEY
import OpenAI from "openai";
import axios from "axios";

const openai = new OpenAI({ apiKey: OPENAI_KEY });

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// ... (previous imports and setup)
function normalizeName(name: string): string[] {
  return name
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ") // Remove non-alphabetic characters
    .split(/\s+/) // Split into parts
    .filter((part) => part.length > 1); // Ignore single letters/short parts
}

// Add this helper function to check name in page content
async function verifyNameInContent(
  url: string,
  fullNameParts: string[],
): Promise<boolean> {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    const pageContent = response.data.toLowerCase();
    const pageParts = normalizeName(pageContent);

    // Check for all name parts or reversed format
    const contentHasAllParts = fullNameParts.every((part) =>
      pageParts.includes(part),
    );

    const reversedPattern =
      fullNameParts[fullNameParts.length - 1] +
      ",\\s*" +
      fullNameParts.slice(0, -1).join("\\s+");
    const hasReversedFormat = new RegExp(reversedPattern).test(pageContent);

    return contentHasAllParts || hasReversedFormat;
  } catch (error: any) {
    console.error(`Error checking ${url}:`, error.message);
    return false;
  }
}

// Continue with OpenAI validation...
export const ProfessionAddController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const Data: ProfessionTable = req.body;

    if (!Data) return res.status(400).json({ data: false, message: err.m014 });

    const { error } = professionValidator.validate(Data);
    if (error) {
      return res.status(400).json({
        data: false,
        message: error.details[0]?.message || err.m029,
      });
    }

    const user = (
      await GetService.byFields(UserQuery.q002, ["Id"], [Number], [Data.UserId])
    )[0];
    if (!user) {
      return res.status(404).json({
        data: false,
        message: "User not found for the given UserId.",
      });
    }

    // Updated API key check for SerpAPI
    if (!SERPAPI_KEY || !OPENAI_KEY) {
      return res.status(500).json({
        data: false,
        message: "Required API keys are missing in environment variables.",
      });
    }

    const query = `${user.Fullname} ${Data.Title} ${Data.Issuer} site:prc.gov.ph OR site:gov.ph OR site:linkedin.com OR site:facebook.com OR site:businesstips.ph OR "license" OR "certificate" OR "board passer"`;
    console.log("query:", query);
    // SerpAPI implementation
    let serpResponse;
    let retries = 3;

    while (retries > 0) {
      try {
        const response = await axios.get("https://serpapi.com/search", {
          params: {
            api_key: SERPAPI_KEY,
            engine: "google",
            q: query,
            hl: "en",
            num: 10, // Get more results for better validation
          },
          timeout: 10000,
        });

        if (response.status !== 200 || !response.data?.organic_results) {
          throw new Error("Invalid SerpAPI response");
        }

        serpResponse = response.data;
        break;
      } catch (error) {
        retries--;
        if (retries === 0)
          throw new Error("Failed to fetch search results via SerpAPI");
        await delay(3000 * (4 - retries));
      }
    } // Process SerpAPI results
    const results: { title: string; link: string; snippet: any }[] =
      serpResponse.organic_results?.map((result: any) => ({
        title: result.title,
        link: result.link,
        snippet: result.snippet,
      })) || [];

    if (results.length === 0) {
      return res.status(404).json({
        data: false,
        message: "No verification sources found for this certificate.",
      });
    }

    // Name validation logic
    const userFullNameParts = normalizeName(user.Fullname);
    const validatedUrls = new Set<string>();

    // Check metadata matches
    results.forEach((result) => {
      const searchString = `${result.title} ${result.snippet} ${result.link}`;
      const searchParts = normalizeName(searchString);

      const allPartsFound = userFullNameParts.every((part) =>
        searchParts.includes(part),
      );

      const reversedName = user.Fullname.toLowerCase().split(/\s+/);
      const lastNameFirst =
        reversedName[reversedName.length - 1] +
        ", " +
        reversedName.slice(0, -1).join(" ");
      const hasReversedFormat = searchString
        .toLowerCase()
        .includes(lastNameFirst);

      if (allPartsFound || hasReversedFormat) {
        validatedUrls.add(result.link);
      }
    });

    // Content check if no metadata matches
    if (validatedUrls.size === 0) {
      const contentChecks = await Promise.all(
        results.slice(0, 3).map(async (result) => {
          const isValid = await verifyNameInContent(
            result.link,
            userFullNameParts,
          );
          if (isValid) validatedUrls.add(result.link);
          return isValid;
        }),
      );
    }

    // Final URL validation check
    if (validatedUrls.size === 0) {
      return res.status(404).json({
        data: false,
        message: "No matching records found for the user's name.",
      });
    }

    // Prepare AI validation with validated URLs
    const uniqueUrls = Array.from(validatedUrls);
    console.log("URLs for OpenAI validation:", uniqueUrls);
    /*
    const validationPrompt = `
    As a professional certificate validator, analyze these verified sources:
    ${uniqueUrls.map((url, i) => `${i + 1}. ${url}`).join("\n")}

    Verify the URL's if legit or valid sources

    Respond ONLY with "true" if ALL conditions are confirmed, otherwise "false".
    `;
   
    // Get AI validation
    let aiResponse: any;

    while (retries > 0) {
      try {
        aiResponse = await openai.chat.completions.create({
          model: "gpt-4.1-mini", // Use valid model
          messages: [
            {
              role: "system",
              content: "You are a source validator. Analyze strictly.",
            },
            {
              role: "user",
              content: validationPrompt,
            },
          ],
          temperature: 0.1,
          max_tokens: 4,
        });
        break;
      } catch (error) {
        retries--;
        if (retries === 0) throw new Error("OpenAI validation failed");
        await delay(2000 * (4 - retries));
      }
    }

    // Validate AI response
    const responseText = aiResponse.choices[0].message.content
      ?.trim()
      .toLowerCase();
    const isValid = responseText === "true";

    if (!isValid) {
      return res.status(401).json({
        data: false,
        message: `Validation failed for: ${uniqueUrls.join(", ")}`,
      });
    }*/

    // Database save logic
    Data.DateCreated = new Date();
    const saveResult = await AddService.record(
      DBTable.t011,
      Object.keys(Data),
      Object.values(Data).map((v) => typeof v),
      Object.values(Data),
    );

    if (!saveResult) {
      return res.status(500).json({ data: false, message: err.m002 });
    }

    return res.status(200).json({
      data: true,
      message: `Certificate validated through: ${uniqueUrls.join(", ")}`,
    });
  } catch (error: any) {
    console.error("Profession-Controller [Add]:", error);
    return res.status(500).json({
      data: false,
      message: error.message || "Validation process failed",
    });
  }
};
