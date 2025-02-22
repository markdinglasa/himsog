import { HeadCell } from "../../components";
import { DiscountItemTable } from "../../dbtables";

export const discountLineHC: HeadCell<DiscountItemTable>[] = [
  {
    Id: "ItemDescription",
    numeric: false,
    disablePadding: true,
    label: "Item Description",
  },
  {
    Id: "IsAutoDiscount",
    numeric: true,
    disablePadding: false,
    label: "Auto Discount",
  },
  {
    Id: "DateCreated",
    numeric: true,
    disablePadding: true,
    label: "Date",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
