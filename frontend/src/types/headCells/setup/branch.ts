import { HeadCell } from "../../components";
import { BranchTable } from "../../dbtables";

export const branchHC: HeadCell<BranchTable>[] = [
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
    Id: "Description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  {
    Id: "Id",
    numeric: false,
    disablePadding: false,
    label: "",
  },
];
