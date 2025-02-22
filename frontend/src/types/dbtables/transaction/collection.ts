import { Id, Logs } from "../../utils";

export interface CollectionTable extends Id, Logs {
  PeriodId: number;
  CollectionDate?: string;
  TerminalId: number;
  TerminalName?: string;
  ORNumber: string;
  CustomerId: number;
  CustomerName?: string;
  SalesId: number;
  SalesNumber?: string;
  SalesBalanceAmount: number;
  Amount: number;
  TenderAmount: number;
  ChangeAmount: number;
  IsReturn: boolean;
  IsRefund: boolean;
  IsCancelled: boolean;
  PreparedBy: number;
  PreparedByName?: string;
  CheckedBy: number;
  CheckedByName?: string;
  ApprovedBy: number;
  ApprovedByName?: string;
  Remarks?: string | null;
  BranchId: number;
}
export type CollectionTables = CollectionTable[];
export const CollectionInitial: CollectionTable = {
  TrnDate: new Date(),
  PeriodId: 0,
  TerminalId: 0,
  ORNumber: "",
  CustomerId: 0,
  SalesId: 0,
  SalesBalanceAmount: 0,
  Amount: 0,
  TenderAmount: 0,
  ChangeAmount: 0,
  IsReturn: false,
  IsRefund: false,
  IsCancelled: false,
  PreparedBy: 0,
  CheckedBy: 0,
  ApprovedBy: 0,
  Remarks: null,
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
};
