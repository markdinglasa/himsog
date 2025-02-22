import { HeadCell } from "../../components";
import { BranchLineTable } from "../../dbtables";

export const brancLinehHC: HeadCell<BranchLineTable>[] = [
  {
    Id: "BranchName",
    numeric: false,
    disablePadding: false,
    label: "Branch",
  },
  {
    Id: "DateCreated",
    numeric: false,
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
