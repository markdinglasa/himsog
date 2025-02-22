import { Id, Logs } from "../../utils";

export interface PurchaseOrderTable extends Id, Logs {
  PeriodId: number;
  Amount: number;
  SupplierId: number;
  SupplierName?: string;
  PreparedBy: number;
  PreparedByName?: string;
  CheckedBy: number;
  CheckedByName?: string;
  ApprovedBy: number;
  ApprovedByName?: string;
  RequestedBy: number | null;
  RequestedByName?: string;
  Remarks: string | null;
  BranchId: number;
}
export type PurchaseOrderTables = PurchaseOrderTable[];
export const PurchaseOrderInitial: PurchaseOrderTable = {
  TrnDate: new Date().toString(),
  RecNumber: "",
  Amount: 0,
  SupplierId: 0,
  PreparedBy: 0,
  CheckedBy: 0,
  ApprovedBy: 0,
  RequestedBy: null,
  Remarks: null,
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
  PeriodId: 0,
};
