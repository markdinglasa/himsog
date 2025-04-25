import { HeadCell } from "../../components";
import { MealPlanRequestTable } from "../../dbtables";

export const mealPlanRequestHC: HeadCell<MealPlanRequestTable>[] = [
  {
    Id: "UserPhoto",
    numeric: true,
    disablePadding: false,
    label: "Photo",
  },
  {
    Id: "UserFullname",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    Id: "MealPlanName",
    numeric: false,
    disablePadding: false,
    label: "Meal Plan",
  },
  {
    Id: "DateCreated",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
];
