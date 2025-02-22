import { Id, Logs } from "../../utils";

export interface StockOutLineTable extends Id, Logs {
  StockOutId: number;
  StockCountNumber?: string;
  ItemId: number;
  ItemDescription?: string;
  ItemSKU?: string;
  UnitId: number;
  UnitName?: string;
  Quantity: number;
  Cost: number;
  Amount: number;
  AssetAccountId: number;
  AssetAccountName?: string;
}
export type StockOutLineTables = StockOutLineTable[];
export const StockOutLineInitial: StockOutLineTable = {
  StockOutId: 0,
  ItemId: 0,
  UnitId: 0,
  Quantity: 0,
  Cost: 0,
  Amount: 0,
  AssetAccountId: 0,
  DateCreated: new Date(),
};
