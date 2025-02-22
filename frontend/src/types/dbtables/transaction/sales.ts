import { Id, Logs } from "../../utils";

export interface SalesTable extends Id, Logs {
  CollectionId?: number;
  InvoiceNumber: string;
  SalesNumber?: string;
  Amount: number;
  TableId: number;
  PeriodId: number;
  CustomerId: number;
  CustomersName?: string;
  TermId: number;
  TermName?: string;
  DiscountId: number;
  DiscountName?: string;
  CustomerName: string | null;
  CustomerIdNumber: string | null;
  CustomerAge: number | null;
  SalesAgent: number;
  SalesAgentName?: string;
  TerminalId: number;
  TerminalName?: string;
  PreparedBy: number;
  PreparedByName?: string;
  CheckedBy: number;
  CheckedByName?: string;
  ApprovedBy: number;
  ApprovedByName?: string;
  IsReturn: boolean;
  IsRefund: boolean;
  IsCancelled: boolean;
  IsTender?: boolean;
  PaidAmount: number;
  CreditAmount: number;
  DebitAmount: number;
  BalanceAmount: number;
  Pax: number;
  TableStatus: string | null;
  Remarks: string | null;
  BranchId: number;
  IsLocked: boolean;
}

export type SalesTables = SalesTable[];
export const SalesInitial: SalesTable = {
  TrnDate: new Date(),
  RecNumber: "",
  InvoiceNumber: "",
  Amount: 0,
  TableId: 0,
  CustomerId: 0,
  TermId: 0,
  DiscountId: 0,

  SalesAgent: 0,
  TerminalId: 0,
  PreparedBy: 0,
  CheckedBy: 0,
  ApprovedBy: 0,
  IsReturn: false,
  IsRefund: false,
  IsCancelled: false,
  PaidAmount: 0,
  CreditAmount: 0,
  DebitAmount: 0,
  BalanceAmount: 0,
  Pax: 0,
  TableStatus: "",
  Remarks: null,
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
  PeriodId: 0,
  CustomerName: null,
  CustomerIdNumber: null,
  CustomerAge: null,
  IsLocked: false,
};
