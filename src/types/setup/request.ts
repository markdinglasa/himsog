import { Id, Logs } from "../generic";

export interface RequestAccessTable extends Id, Logs {
  Email: string;
  IsApproved: boolean | null;
  Expiry: string;
}
export type RequestAccessTables = RequestAccessTable[];
export const RequestAccessInitial: RequestAccessTable = {
  Email: "",
  IsApproved: null,
  Expiry: "",
};
