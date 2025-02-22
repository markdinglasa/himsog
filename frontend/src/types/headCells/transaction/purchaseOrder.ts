import { HeadCell } from "../../components";
import { PurchaseOrderTable } from "../../dbtables";

export const purchaseOrderHC: HeadCell<PurchaseOrderTable>[] = [
  {
    Id: "RecNumber",
    numeric: false,
    disablePadding: true,
    label: "No.",
  },
  {
    Id: "TrnDate",
    numeric: false,
    disablePadding: false,
    label: "TxDate",
  },
  {
    Id: "SupplierName",
    numeric: false,
    disablePadding: false,
    label: "Supplier",
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
