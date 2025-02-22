import { HeadCell } from "../../components";
import { ItemTable } from "../../dbtables";

export const itemHC: HeadCell<ItemTable>[] = [
  {
    Id: "RecNumber",
    numeric: false,
    disablePadding: true,
    label: "No.",
  },
  {
    Id: "ItemSKU",
    numeric: true,
    disablePadding: false,
    label: "SKU",
  },
  {
    Id: "Description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  {
    Id: "Price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    Id: "OnhandQuantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    Id: "UnitName",
    numeric: true,
    disablePadding: false,
    label: "Unit",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
