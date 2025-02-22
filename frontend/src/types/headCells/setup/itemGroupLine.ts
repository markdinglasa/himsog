import { HeadCell } from "../../components";
import { ItemGroupLineTable } from "../../dbtables";

export const itemGroupLineHC: HeadCell<ItemGroupLineTable>[] = [
  {
    Id: "ItemDescription",
    numeric: false,
    disablePadding: true,
    label: "Item",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
