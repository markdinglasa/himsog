import { HeadCell } from "../../components";
import { RoleLineTable } from "../../dbtables";

export const roleLineHC: HeadCell<RoleLineTable>[] = [
  {
    Id: "BranchName",
    numeric: false,
    disablePadding: true,
    label: "Branch",
  },
  {
    Id: "RoleName",
    numeric: false,
    disablePadding: true,
    label: "Role",
  },
  {
    Id: "UserName",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    Id: "DateCreated",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
