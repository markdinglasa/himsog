import { HeadCell } from "../../components";
import { TaxTable } from "../../dbtables";

export const taxHC: HeadCell<TaxTable>[] = [
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
    Id: "Rate",
    numeric: false,
    disablePadding: false,
    label: "Rate",
  },
  {
    Id: "AccountName",
    numeric: false,
    disablePadding: false,
    label: "Account",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
