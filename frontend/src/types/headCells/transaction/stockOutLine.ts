import { HeadCell } from "../../components";
import { StockOutLineTable } from "../../dbtables";

export const stockOutLineHC: HeadCell<StockOutLineTable>[] = [
  {
    Id: "ItemDescription",
    numeric: false,
    disablePadding: true,
    label: "Item",
  },
  {
    Id: "UnitName",
    numeric: true,
    disablePadding: false,
    label: "Unit",
  },
  {
    Id: "Cost",
    numeric: true,
    disablePadding: false,
    label: "Cost",
  },

  {
    Id: "Quantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    Id: "Amount",
    numeric: true,
    disablePadding: false,
    label: "Amount",
  },

  {
    Id: "AssetAccountName",
    numeric: false,
    disablePadding: false,
    label: "Asset Account",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
