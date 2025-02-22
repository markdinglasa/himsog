import { HeadCell } from "../../components";
import { DiscountTable } from "../../dbtables";

export const discountHC: HeadCell<DiscountTable>[] = [
  {
    Id: "RecNumber",
    numeric: false,
    disablePadding: true,
    label: "No.",
  },
  {
    Id: "Name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    Id: "DiscountRate",
    numeric: true,
    disablePadding: true,
    label: "Rate",
  },
  {
    Id: "IsVATExempt",
    numeric: true,
    disablePadding: true,
    label: "VAT Exempt",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
