import { HeadCell } from "../../components";
import { ItemGroupTable } from "../../dbtables";

export const itemGroupHC: HeadCell<ItemGroupTable>[] = [
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
    Id: "KitchenReportName",
    numeric: false,
    disablePadding: false,
    label: "Kitchen Report",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
