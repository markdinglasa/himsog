import { Id, Logs } from "../../utils";

export interface InventoryTable extends Id, Logs {
  ItemId: number;
  InventoryDate: Date | string;
  Quantity: number;
  BranchId: number;
}
export type InventoryTables = InventoryTable[];
export const InventoryInitial: InventoryTable = {
  ItemId: 0,
  InventoryDate: new Date(),
  Quantity: 0,
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
};
