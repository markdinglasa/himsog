import { HeadCell } from "../../components";
import { CustomerTable } from "../../dbtables";

export const customerHC: HeadCell<CustomerTable>[] = [
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
    Id: "CreditLimit",
    numeric: true,
    disablePadding: false,
    label: "Credits",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
