import { Id, Logs } from "../../utils";

export interface StockInLineTable extends Id, Logs {
  StockInId: number;
  StockInNumber?: string;
  ItemId: number;
  ItemDescription?: string;
  ItemSKU?: string;
  UnitId: number;
  UnitName?: string;
  Quantity: number;
  Cost: number;
  Amount: number;
  ExpiryDate: Date | null;
  LotNumber: string | null;
  AssetAccountId: number;
  AssetAccountName?: string;
  Price: number | null;
}
export type StockInLineTables = StockInLineTable[];
export const StockInLineInitial: StockInLineTable = {
  StockInId: 0,
  ItemId: 0,
  UnitId: 0,
  Quantity: 0,
  Cost: 0,
  Amount: 0,
  ExpiryDate: null,
  LotNumber: null,
  AssetAccountId: 0,
  Price: null,
  DateCreated: new Date(),
};
