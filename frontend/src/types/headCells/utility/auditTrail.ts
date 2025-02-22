import { HeadCell } from "../../components";
import { AuditTrailTable } from "../../dbtables";

export const auditTrailHC: HeadCell<AuditTrailTable>[] = [
  {
    Id: "UserName",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    Id: "Table",
    numeric: false,
    disablePadding: false,
    label: "Table",
  },
  {
    Id: "Record",
    numeric: false,
    disablePadding: false,
    label: "Record",
  },
  {
    Id: "Action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
  {
    Id: "DateCreated",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
];
