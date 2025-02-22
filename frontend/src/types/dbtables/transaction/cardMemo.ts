import { Id, Logs } from "../../utils";

export interface CardMemoTable extends Id, Logs {
  PeriodId: number;
  PeriodName?: string;
  Particulars?: string | null;
  PreparedBy: number;
  PreparedByName?: string;
  CheckedBy: number;
  CheckedByName?: string;
  ApprovedBy: number;
  ApprovedByName?: string;
  BranchId: number;
  CardMemoNumber?: string;
}
export type CardMemoTables = CardMemoTable[];
export const CardMemoInitial: CardMemoTable = {
  PeriodId: 0,
  TrnDate: new Date(),
  Particulars: null,
  PreparedBy: 0,
  CheckedBy: 0,
  ApprovedBy: 0,
  RecNumber: "",
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
};
