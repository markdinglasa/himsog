import { Id, Logs } from "../../utils";

export interface StockInTable extends Id, Logs {
  PeriodId: number;
  PeriodName?: string;
  SupplierId: number;
  SupplierName?: string;
  IsReturn: boolean;
  IsRefund: boolean;
  IsCancelled: boolean;
  SalesId: number | null;
  SalesNumber?: string;
  CollectionId: number | null;
  CollectionNumber?: string;
  PurchaseOrderId: number | null;
  PurchaseOrderNumber?: string;
  PreparedBy: number;
  PreparedByName?: string;
  CheckedBy: number;
  CheckedByName?: string;
  ApprovedBy: number;
  ApprovedByName?: string;
  Amount?: number;
  Remarks?: string | null;
  BranchId: number;
}
export type StockInTables = StockInTable[];
export const StockInInitial: StockInTable = {
  TrnDate: new Date(),
  RecNumber: "",
  PeriodId: 0,
  SupplierId: 0,
  IsReturn: false,
  IsRefund: false,
  IsCancelled: false,
  SalesId: null,
  CollectionId: null,
  PurchaseOrderId: null,
  PreparedBy: 0,
  CheckedBy: 0,
  ApprovedBy: 0,
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
};
