import { HeadCell } from "../../components";
import { NotificationTable } from "../../dbtables";

export const notificationHC: HeadCell<NotificationTable>[] = [
  {
    Id: "Description",
    numeric: false,
    disablePadding: true,
    label: "Description",
  },
  {
    Id: "IsRead",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    Id: "DateCreated",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
