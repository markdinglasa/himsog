import { HeadCell } from "../../components";
import { MealPlanTable } from "../../dbtables";

export const MealPlanHC: HeadCell<MealPlanTable>[] = [
  {
    Id: "Name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    Id: "Diet",
    numeric: false,
    disablePadding: false,
    label: "Diet",
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
