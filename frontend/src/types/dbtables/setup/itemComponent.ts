import { Id, Logs } from "../../utils";

export interface ItemComponentTable extends Id, Logs {
  ItemId: number;
  ItemSKU?: string;
  ItemDescription?: string;
  ComponentId: number;
  ComponentCount?: string;
  ComponentDescription?: string;
  UnitId: number;
  UnitName?: string;
  Quantity: number;
  QuantityOnHand?: number;
  Cost: number;
  Amount: number;
  IsPrinted: boolean;
  IsPackage?: boolean;
  PackageCount?: number;
}
export type ItemComponentTables = ItemComponentTable[];
export const ItemComponentInitial: ItemComponentTable = {
  ItemId: 0,
  ComponentId: 0,
  UnitId: 0,
  Quantity: 0,
  Cost: 0,
  Amount: 0,
  IsPrinted: false,
};
