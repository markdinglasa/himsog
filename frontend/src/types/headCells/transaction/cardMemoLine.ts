import { HeadCell } from "../../components";
import { CardMemoLineTable } from "../../dbtables";

export const cardMemoLineHC: HeadCell<CardMemoLineTable>[] = [
  {
    Id: "SalesNumber",
    numeric: false,
    disablePadding: true,
    label: "Sales No.",
  },
  {
    Id: "AccountName",
    numeric: true,
    disablePadding: false,
    label: "Account",
  },
  {
    Id: "Particular",
    numeric: false,
    disablePadding: false,
    label: "Particulars",
  },
  {
    Id: "DebitAmount",
    numeric: true,
    disablePadding: false,
    label: "Debit",
  },
  {
    Id: "CreditAmount",
    numeric: true,
    disablePadding: false,
    label: "Credit",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
