import { Id, Logs } from "../../utils";

export interface StockOutTable extends Id, Logs {
  PeriodId: number;
  PeriodName?: string;
  AccountId: number;
  AccountName?: string;
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
export type StockOutTables = StockOutTable[];
export const StockOutInitial: StockOutTable = {
  RecNumber: "",
  PeriodId: 0,
  AccountId: 0,
  PreparedBy: 0,
  CheckedBy: 0,
  ApprovedBy: 0,
  Remarks: null,
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
};
