import { Id, Logs } from "../../utils";

export interface SalesLineTable extends Id, Logs {
  SalesId: number;
  SalesNumber?: string;
  ItemId: number;
  ItemDescription?: string;
  ItemSKU?: string;
  UnitId: number;
  UnitName?: string;
  Price: number;
  DiscountId: number;
  DiscountName?: string;
  DiscountRate: number;
  DiscountAmount: number;
  NetPrice: number;
  Amount: number;
  Quantity: number;
  TaxId: number;
  TaxName?: string;
  TaxRate: number;
  TaxAmount: number;
  SalesAccountId: number;
  SalesAccountName?: string;
  AssetAccountId: number;
  AssetAccountName?: string;
  CostAccountId: number;
  CostAccountName?: string;
  TaxAccountId: number;
  TaxAccountName?: string;
  DiscountAmountNoRate?: number;
  TaxAmountNoRate?: number;
}
export type SalesLineTables = SalesLineTable[];
export const SalesLineInitial: SalesLineTable = {
  SalesId: 0,
  ItemId: 0,
  UnitId: 0,
  Price: 0,
  DiscountId: 0,
  DiscountRate: 0,
  DiscountAmount: 0,
  NetPrice: 0,
  Amount: 0,
  Quantity: 0,
  TaxId: 0,
  TaxRate: 0,
  TaxAmount: 0,
  SalesAccountId: 0,
  AssetAccountId: 0,
  CostAccountId: 0,
  TaxAccountId: 0,
  DateCreated: new Date(),
};

export interface SalesLineDiscount {
  SalesId?: number;
  DiscountId: number;
  DiscountName?: string;
  CustomerName: string | null;
  CustomerIdNumber: string | null;
  CustomerAge: number | null;
}
