import { HeadCell } from "../../components";
import { SalesTable } from "../../dbtables";

export const salesHC: HeadCell<SalesTable>[] = [
  {
    Id: "RecNumber",
    numeric: false,
    disablePadding: true,
    label: "No.",
  },
  {
    Id: "TrnDate",
    numeric: true,
    disablePadding: false,
    label: "TxDate",
  },
  {
    Id: "TerminalName",
    numeric: true,
    disablePadding: true,
    label: "Terminal",
  },

  {
    Id: "CustomerName",
    numeric: false,
    disablePadding: false,
    label: "Customer",
  },
  {
    Id: "SalesAgentName",
    numeric: true,
    disablePadding: false,
    label: "Agent",
  },
  {
    Id: "Amount",
    numeric: true,
    disablePadding: false,
    label: "Amount",
  },
  {
    Id: "IsLocked",
    numeric: false,
    disablePadding: false,
    label: "T",
  },
  /*{
    Id: "IsReturn",
    numeric: false,
    disablePadding: false,
    label: "R",
  },*/
  {
    Id: "IsCancelled",
    numeric: false,
    disablePadding: false,
    label: "C",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
