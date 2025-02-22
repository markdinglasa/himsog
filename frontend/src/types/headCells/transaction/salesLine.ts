import { HeadCell } from "../../components";
import { SalesLineTable } from "../../dbtables";

export const salesLineHC: HeadCell<SalesLineTable>[] = [
  {
    Id: "ItemDescription",
    numeric: false,
    disablePadding: true,
    label: "Item",
  },
  {
    Id: "UnitName",
    numeric: true,
    disablePadding: false,
    label: "Unit",
  },
  {
    Id: "Price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    Id: "DiscountAmount",
    numeric: true,
    disablePadding: false,
    label: "Discount",
  },
  {
    Id: "NetPrice",
    numeric: true,
    disablePadding: false,
    label: "Net Price",
  },
  {
    Id: "Quantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    Id: "Amount",
    numeric: true,
    disablePadding: false,
    label: "Amount",
  },
  {
    Id: "TaxAmount",
    numeric: true,
    disablePadding: false,
    label: "VAT",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
