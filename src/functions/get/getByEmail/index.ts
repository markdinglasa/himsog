import { GetService } from "../../../services";
import { Error, Success, FnQuery } from "../../../shared";
import { ModelResponse } from "../../../types";

export const getByEmail = async (
  Email: string = "",
): Promise<ModelResponse> => {
  try {
    if (!Email || typeof Email !== "string" || !Email.trim())
      return { data: [], message: Error.m014 };
    const user = await GetService.byFields(
      FnQuery.q002,
      ["Email"],
      [String],
      [Email],
    );
    if (!user) return { data: [], message: Error.m011 };
    return { data: user[0], message: Success.m001 };
  } catch (error: any) {
    return { data: [], message: Error.m001 };
  }
};

export const getByUsername = async (
  Username: string = "",
): Promise<ModelResponse> => {
  try {
    if (!Username || typeof Username !== "string" || !Username.trim())
      return { data: {}, message: Error.m014 };
    const user = await GetService.byFields(
      FnQuery.q001,
      ["Username"],
      [String],
      [Username],
    );
    if (!user) return { data: {}, message: Error.m011 };
    return { data: user[0], message: Success.m001 };
  } catch (error: any) {
    return { data: {}, message: Error.m001 };
  }
};
