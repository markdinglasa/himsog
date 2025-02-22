import { HeadCell } from "../../components";
import { SupplierTable } from "../../dbtables";

export const supplierHC: HeadCell<SupplierTable>[] = [
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
    Id: "Address",
    numeric: false,
    disablePadding: false,
    label: "Address",
  },
  {
    Id: "ContactNumber",
    numeric: true,
    disablePadding: false,
    label: "Contact",
  },
  {
    Id: "TermName",
    numeric: true,
    disablePadding: false,
    label: "Term",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
