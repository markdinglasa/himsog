import { Id, Logs } from "../../utils";

export interface PackageTable extends Id, Logs {
  ItemId: number;
  ItemDescription?: string;
  PackageItemId: number;
  PackageItemName?: string;
  UnitId: number;
  UnitName?: string;
  Quantity: number;
  IsOptional: boolean;
}
export type PackageTables = PackageTable[];
export const PackageInitial: PackageTable = {
  ItemId: 0,
  PackageItemId: 0,
  UnitId: 0,
  Quantity: 0,
  IsOptional: false,
  DateCreated: new Date(),
};
