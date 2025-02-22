import { Id, Logs } from "../../utils";

export interface ItemGroupTable extends Id, Logs {
  Name: string;
  KitchenReport: number;
  KitchenReportName?: string;
  Image: string | null;
  BranchId: number;
}
export type ItemGroupTables = ItemGroupTable[];
export const ItemGroupInitial: ItemGroupTable = {
  RecNumber: "",
  Name: "",
  KitchenReport: 0,
  Image: null,
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
};
