import { HeadCell } from "../../components";
import { StockCountTable } from "../../dbtables";

export const stockCountHC: HeadCell<StockCountTable>[] = [
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
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
