import { Id, Logs } from "../../utils";

export interface PurchaseOrderLineTable extends Id, Logs {
  PurchaseOrderId: number;
  ItemId: number;
  ItemDescription?: string;
  UnitId: number;
  UnitName?: string;
  Quantity: number;
  Cost: number;
  Amount: number;
}
export type PurchaseOrderLineTables = PurchaseOrderLineTable[];
export const PurchaseOrderLineInitial: PurchaseOrderLineTable = {
  PurchaseOrderId: 0,
  ItemId: 0,
  UnitId: 0,
  Quantity: 0,
  Cost: 0,
  Amount: 0,
  DateCreated: new Date(),
};
