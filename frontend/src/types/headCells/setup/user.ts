import { HeadCell } from "../../components";
import { UserTable } from "../../dbtables";

export const userHC: HeadCell<UserTable>[] = [
  {
    Id: "RecNumber",
    numeric: false,
    disablePadding: true,
    label: "No.",
  },
  {
    Id: "Username",
    numeric: false,
    disablePadding: false,
    label: "Username",
  },
  {
    Id: "Name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    Id: "Email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
