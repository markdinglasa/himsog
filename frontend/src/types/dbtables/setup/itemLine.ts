import { Id, Logs } from "../../utils";

export interface ItemLineTable extends Id, Logs {
  ItemId: number;
  ItemDescription?: string;
  Description: string;
  Price: number;
  TriggerQuantity: number;
}
export type ItemLineTables = ItemLineTable[];
export const ItemLineInitial: ItemLineTable = {
  Description: "",
  Price: 0,
  TriggerQuantity: 0,
  DateCreated: new Date(),
  ItemId: 0,
};
