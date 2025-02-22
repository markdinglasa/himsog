import { HeadCell } from "../../components";
import { ItemTable } from "../../dbtables";

export const salesItemHC: HeadCell<ItemTable>[] = [
  {
    Id: "ItemSKU",
    numeric: true,
    disablePadding: true,
    label: "SKU",
  },
  {
    Id: "Description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  {
    Id: "GenericName",
    numeric: false,
    disablePadding: true,
    label: "Generic Name",
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
    Id: "IsInventory",
    numeric: true,
    disablePadding: false,
    label: "Inventory",
  },
];
