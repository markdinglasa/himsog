import { Id, Logs } from "../generic";

export interface RequestAccessTable extends Id, Logs {
  Email: string;
  IsApproved: boolean | null;
  Token: string;
  Remarks: string | null;
  EventId: number | null;
  ArticleId: number | null;
}
export type RequestAccessTables = RequestAccessTable[];
export const RequestAccessInitial: RequestAccessTable = {
  Email: "",
  Remarks: null,
  IsApproved: null,
  Token: "",
  EventId: null,
  ArticleId: null,
};
