import { HeadCell } from "../../components";
import { EventTable } from "../../dbtables";

export const EventHC: HeadCell<EventTable>[] = [
  {
    Id: "Title",
    numeric: false,
    disablePadding: false,
    label: "Title",
  },
  {
    Id: "Category",
    numeric: false,
    disablePadding: false,
    label: "Category",
  },
  {
    Id: "ScheduleDate",
    numeric: false,
    disablePadding: false,
    label: "Scheduled Date",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
