import { Id, Logs } from "../../utils";

export interface ItemTable extends Id, Logs {
  BranchId: number;
  ItemSKU?: string;
  Description: string;
  Alias: string;
  GenericName: string;
  Category: string;
  SalesAccountId: number;
  SalesAccountName?: string;
  AssetAccountId: number;
  AssetAccountName?: string;
  CostAccountId: number;
  CostAccountName?: string;
  InTaxId: number;
  InTaxName?: string;
  OutTaxId: number;
  OutTaxName?: string;
  UnitId: number;
  UnitName?: string;
  SupplierId: number;
  SupplierName?: string;
  Cost: number;
  MarkUp: number;
  Price: number;
  ReorderQuantity: number;
  OnhandQuantity: number;
  IsInventory: boolean;
  ExpiryDate: Date | string | null;
  LotNumber: string | null;
  IsPackage: boolean;
  Remarks: string | null;
  KitchenReport: number | null;
  Image: string | null;
}
export type ItemTables = ItemTable[];
export const ItemInitial: ItemTable = {
  RecNumber: "",
  Description: "",
  Alias: "",
  GenericName: "",
  Category: "",
  SalesAccountId: 0,
  AssetAccountId: 0,
  CostAccountId: 0,
  InTaxId: 0,
  OutTaxId: 0,
  UnitId: 0,
  SupplierId: 0,
  Cost: 0,
  MarkUp: 0,
  Price: 0,
  ReorderQuantity: 0,
  OnhandQuantity: 0,
  IsInventory: false,
  ExpiryDate: null,
  LotNumber: null,
  IsPackage: false,
  Remarks: null,
  KitchenReport: null,
  Image: null,
  CreatedBy: 0,
  BranchId: 0,
};
