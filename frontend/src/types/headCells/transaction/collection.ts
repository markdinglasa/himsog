import { HeadCell } from "../../components";
import { CollectionTable } from "../../dbtables";

export const collectionHC: HeadCell<CollectionTable>[] = [
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
    Id: "SalesNumber",
    numeric: false,
    disablePadding: false,
    label: "Sales No.",
  },
  {
    Id: "CustomerName",
    numeric: false,
    disablePadding: false,
    label: "Customer",
  },
  {
    Id: "TerminalName",
    numeric: true,
    disablePadding: false,
    label: "Terminal",
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
