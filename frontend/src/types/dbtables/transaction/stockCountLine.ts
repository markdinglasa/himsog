import { Id, Logs } from "../../utils";

export interface StockCountLineTable extends Id, Logs {
  StockCountId: number;
  StockCountNumber?: string;
  ItemId: number;
  ItemDescription?: string;
  ItemSKU?: string;
  UnitId: number;
  UnitName?: string;
  Quantity: number;
  Cost: number;
  Amount: number;
}
export type StockCountLineTables = StockCountLineTable[];
export const StockCountLineInitial: StockCountLineTable = {
  StockCountId: 0,
  ItemId: 0,
  UnitId: 0,
  Quantity: 0,
  Cost: 0,
  Amount: 0,
  DateCreated: new Date(),
};
