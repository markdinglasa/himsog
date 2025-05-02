import { HeadCell } from "../../components";
import { RequestAccessTable } from "../../dbtables";

export const RequestAccessHC: HeadCell<RequestAccessTable>[] = [
  {
    Id: "Email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    Id: "IsApproved",
    numeric: true,
    disablePadding: false,
    label: "Status",
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
    label: "Action",
  },
];
