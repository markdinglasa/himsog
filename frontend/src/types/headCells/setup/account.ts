import { HeadCell } from "../../components";
import { AccountTable } from "../../dbtables";

export const accountHC: HeadCell<AccountTable>[] = [
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
    Id: "AccountType",
    numeric: true,
    disablePadding: false,
    label: "Type",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
