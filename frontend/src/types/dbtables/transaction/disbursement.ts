import { Id, Logs } from "../../utils";

export interface DisbursementTable extends Id, Logs {
  PeriodId: number;
  DisbursementNumber?: string;
  Type: string;
  Amount: number;
  AccountId: number;
  AccountName?: string;
  PayTypeId: number;
  PayTypeName?: string;
  TerminalId: number;
  TerminalName?: string;
  IsReturn: boolean;
  IsRefund: boolean;
  IsCancelled: boolean;
  StockInId: number | null;
  PreparedBy: number;
  PreparedByName?: string;
  CheckedBy: number;
  CheckedByName?: string;
  ApprovedBy: number;
  ApprovedByName?: string;
  Remarks: string | null;
  Amount1000: number | null;
  Amount500: number | null;
  Amount200: number | null;
  Amount100: number | null;
  Amount50: number | null;
  Amount20: number | null;
  Amount10: number | null;
  Amount5: number | null;
  Amount1: number | null;
  Amount025: number | null;
  Amount010: number | null;
  Amount005: number | null;
  Amount001: number | null;
  BranchId: number;
  Payee: string | null;
}
export type DisbursementTables = DisbursementTable[];
export const DisbursementInitial: DisbursementTable = {
  TrnDate: new Date(),
  RecNumber: "",
  PeriodId: 0,
  Type: "",
  Amount: 0,
  AccountId: 0,
  PayTypeId: 0,
  TerminalId: 0,
  IsReturn: false,
  IsRefund: false,
  IsCancelled: false,
  StockInId: 0,
  PreparedBy: 0,
  CheckedBy: 0,
  ApprovedBy: 0,
  Remarks: null,
  Amount1000: null,
  Amount500: null,
  Amount200: null,
  Amount100: null,
  Amount50: null,
  Amount20: null,
  Amount10: null,
  Amount5: null,
  Amount1: null,
  Amount025: null,
  Amount010: null,
  Amount005: null,
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
  Payee: null,
  Amount001: null,
};
