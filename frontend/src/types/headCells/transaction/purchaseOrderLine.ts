import { HeadCell } from "../../components";
import { PurchaseOrderLineTable } from "../../dbtables";

export const purchaseOrderLineHC: HeadCell<PurchaseOrderLineTable>[] = [
  {
    Id: "ItemDescription",
    numeric: false,
    disablePadding: false,
    label: "Item",
  },
  {
    Id: "UnitName",
    numeric: true,
    disablePadding: false,
    label: "Unit",
  },
  {
    Id: "Amount",
    numeric: true,
    disablePadding: false,
    label: "Amount",
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
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
