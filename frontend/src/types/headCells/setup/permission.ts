import { HeadCell } from "../../components";
import { PermissionTable } from "../../dbtables";

export const permissionHC: HeadCell<PermissionTable>[] = [
  {
    Id: "AccessRightName",
    numeric: false,
    disablePadding: false,
    label: "Access Right",
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

export const accessRightHC: HeadCell<PermissionTable>[] = [
  {
    Id: "AccessRightName",
    numeric: false,
    disablePadding: false,
    label: "Access Right",
  },
  {
    Id: "DateCreated",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
];
