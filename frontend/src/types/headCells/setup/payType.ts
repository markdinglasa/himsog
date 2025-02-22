import { HeadCell } from "../../components";
import { PayTypeTable } from "../../dbtables";

export const payTypeHC: HeadCell<PayTypeTable>[] = [
  {
    Id: "RecNumber",
    numeric: false,
    disablePadding: true,
    label: "No.",
  },
  {
    Id: "Name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    Id: "AccountName",
    numeric: false,
    disablePadding: false,
    label: "Account",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
