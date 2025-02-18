import { Request } from "express";

export interface Id {
  Id?: string;
  No?: string;
  TxDate?: string;
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
  User?: any;
  AccessToken?: string;
  RefreshToken?: string;
}

export interface ModelResponse {
  data: any;
  message: string;
}
