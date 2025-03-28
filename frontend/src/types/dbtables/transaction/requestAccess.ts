import { Id, Logs } from "../../utils";

export interface RequestAccessTable extends Id, Logs {
  Email: string;
  IsApproved: boolean;
  Token: string;
  Remarks: string | null;
  EventId: number | null;
  ArticleId: number | null;
}
export type RequestAccessTables = RequestAccessTable[];
export const RequestAccessInitial: RequestAccessTable = {
  Email: "",
  IsApproved: false,
  Token: "",
  Remarks: null,
  EventId: null,
  ArticleId: null,
};
