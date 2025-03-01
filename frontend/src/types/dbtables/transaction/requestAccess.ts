import { Id, Logs } from "../../utils";

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
