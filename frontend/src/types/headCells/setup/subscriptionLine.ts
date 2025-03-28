import { HeadCell } from "../../components";
import { SubscriptionLineTable } from "../../dbtables";

export const subscriptionLineHC: HeadCell<SubscriptionLineTable>[] = [
  {
    Id: "UserName",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    Id: "DateStart",
    numeric: false,
    disablePadding: false,
    label: "Started On",
  },
  {
    Id: "DateEnd",
    numeric: false,
    disablePadding: false,
    label: "End On",
  },
  {
    Id: "SubscriptionStatus",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
