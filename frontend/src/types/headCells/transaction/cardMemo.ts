import { HeadCell } from "../../components";
import { CardMemoTable } from "../../dbtables";

export const cardMemoHC: HeadCell<CardMemoTable>[] = [
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
    Id: "PeriodName",
    numeric: true,
    disablePadding: false,
    label: "Period",
  },
  {
    Id: "Particulars",
    numeric: false,
    disablePadding: false,
    label: "Particulars",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
