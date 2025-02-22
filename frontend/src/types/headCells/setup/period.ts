import { HeadCell } from "../../components";
import { PeriodTable } from "../../dbtables";

export const periodHC: HeadCell<PeriodTable>[] = [
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
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
