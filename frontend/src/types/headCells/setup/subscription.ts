import { HeadCell } from "../../components";
import { SubscriptionTable } from "../../dbtables";

export const subscriptionHC: HeadCell<SubscriptionTable>[] = [
  {
    Id: "Name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    Id: "Duration",
    numeric: true,
    disablePadding: false,
    label: "Duration",
  },
  {
    Id: "Price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
