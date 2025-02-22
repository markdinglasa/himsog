import { HeadCell } from "../../components";
import { TermTable } from "../../dbtables";

export const termHC: HeadCell<TermTable>[] = [
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
    Id: "NoDays",
    numeric: true,
    disablePadding: false,
    label: "No. Days",
  },

  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
