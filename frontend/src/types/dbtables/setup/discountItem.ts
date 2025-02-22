import { Id, Logs } from "../../utils";

export interface DiscountItemTable extends Id, Logs {
  DiscountId: number;
  DiscountName?: string;
  ItemId: number;
  ItemDescription?: string;
  IsAutoDiscount: boolean;
}
export type DiscountItemTables = DiscountItemTable[];
export const DiscountItemInitial: DiscountItemTable = {
  DiscountId: 0,
  ItemId: 0,
  IsAutoDiscount: false,
};
