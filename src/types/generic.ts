import { Request } from "express";
import { UserTable } from "./setup";

export interface Id {
  Id?: string;
  RecNumber?: string;
  TrnDate?: string;
}

export interface Logs {
  CreatedBy?: number;
  DateCreated?: Date | string;
  UpdatedBy?: number | null;
  DateUpdated?: Date | string | null;
}

export enum Status {
  lock = "lock",
  unlock = "unlock",
  bookmark = "bookmark",
}

export interface LoginRequest extends Request {
  User?: UserTable;
  AccessToken?: string;
  RefreshToken?: string;
}

export interface ModelResponse {
  data: any;
  message: string;
}
