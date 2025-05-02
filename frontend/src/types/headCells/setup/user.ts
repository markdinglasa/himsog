import { HeadCell } from "../../components";
import { UserTable } from "../../dbtables";

export const userHC: HeadCell<UserTable>[] = [
  {
    Id: "Role",
    numeric: false,
    disablePadding: false,
    label: "Role",
  },
  {
    Id: "Fullname",
    numeric: false,
    disablePadding: false,
    label: "Full Name",
  },
  {
    Id: "ContactNumber",
    numeric: false,
    disablePadding: false,
    label: "Mobile Number",
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
