import { HeadCell } from "../../components";
import { DisbursementTable } from "../../dbtables";

export const disbursementHC: HeadCell<DisbursementTable>[] = [
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
    Id: "Amount",
    numeric: true,
    disablePadding: false,
    label: "Amount",
  },
  {
    Id: "AccountName",
    numeric: true,
    disablePadding: false,
    label: "Account",
  },
  {
    Id: "Remarks",
    numeric: false,
    disablePadding: false,
    label: "Remarks",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
