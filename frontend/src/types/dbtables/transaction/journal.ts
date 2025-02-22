import { Id, Logs } from "../../utils";

export interface JournalTable extends Id, Logs {
  RefDocument: string;
  AccountId: number;
  DebitAmount: number;
  CreditAmount: number;
  SalesId: number | null;
  StockInId: number | null;
  CollectionId: number | null;
  CardMemoId: number | null;
  DisbursementId: number | null;
}
export type JournalTables = JournalTable[];
export const JournalInitial: JournalTable = {
  RefDocument: "",
  AccountId: 0,
  DebitAmount: 0,
  CreditAmount: 0,
  SalesId: null,
  StockInId: null,
  CollectionId: null,
  CardMemoId: null,
  DisbursementId: null,
  DateCreated: new Date(),
};
