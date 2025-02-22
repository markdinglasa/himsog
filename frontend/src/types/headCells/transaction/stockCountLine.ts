import { HeadCell } from "../../components";
import { StockCountLineTable } from "../../dbtables";

export const stockCountLineHC: HeadCell<StockCountLineTable>[] = [
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
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
