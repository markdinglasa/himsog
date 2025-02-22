import { Id, Logs } from "../../utils";

export interface CardMemoLineTable extends Id, Logs {
  CardMemoId: number;
  SalesId: number;
  SalesNumber?: string;
  AccountId: number;
  AccountName?: string;
  Particular?: string | null;
  DebitAmount: number;
  CreditAmount: number;
}
export type CardMemoLineTables = CardMemoLineTable[];
export const CardMemoLineInitial: CardMemoLineTable = {
  CardMemoId: 0,
  SalesId: 0,
  AccountId: 0,
  Particular: null,
  DebitAmount: 0,
  CreditAmount: 0,
  DateCreated: new Date(),
};
