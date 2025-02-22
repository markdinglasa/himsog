import { Id, Logs } from "../../utils";

export interface ItemGroupLineTable extends Id, Logs {
  ItemId: number;
  ItemDescription?: string;
  ItemSKU?: string;
  ItemGroupId: number;
  ItemGroupName?: string;
}
export type ItemGroupLineTables = ItemGroupLineTable[];
export const ItemGroupLineInitial: ItemGroupLineTable = {
  ItemId: 0,
  ItemGroupId: 0,
  DateCreated: new Date(),
};
