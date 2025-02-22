import { HeadCell } from "../../components";
import { StockInTable } from "../../dbtables";

export const stockInHC: HeadCell<StockInTable>[] = [
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
    Id: "Remarks",
    numeric: false,
    disablePadding: false,
    label: "Remarks",
  },
  {
    Id: "Amount",
    numeric: true,
    disablePadding: false,
    label: "Amount",
  },
  {
    Id: "IsReturn",
    numeric: true,
    disablePadding: false,
    label: "R",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
