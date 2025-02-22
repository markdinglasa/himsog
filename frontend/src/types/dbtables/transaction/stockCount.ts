import { Id, Logs } from "../../utils";

export interface StockCountTable extends Id, Logs {
  PeriodId: number;
  PeriodName?: string;
  PreparedBy: number;
  PreparedByName?: string;
  CheckedBy: number;
  CheckedByName?: string;
  ApprovedBy: number;
  ApprovedByName?: string;
  Remarks: string | null;
  Amount?: number;
  BranchId: number;
}
export type StockCountTables = StockCountTable[];
export const StockCountInitial: StockCountTable = {
  RecNumber: "",
  TrnDate: new Date(),
  PeriodId: 0,
  PreparedBy: 0,
  CheckedBy: 0,
  ApprovedBy: 0,
  Remarks: null,
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
};
