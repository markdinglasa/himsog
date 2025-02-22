import { HeadCell } from "../../components";
import { ItemLineTable } from "../../dbtables";

export const itemLineHC: HeadCell<ItemLineTable>[] = [
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
    Id: "TriggerQuantity",
    numeric: true,
    disablePadding: false,
    label: "Trigger Quantity",
  },
  {
    Id: "DateCreated",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
