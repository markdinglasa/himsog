import { HeadCell } from "../../components";
import { MealPlanRequestTable } from "../../dbtables";

export const mealPlanRequestHC: HeadCell<MealPlanRequestTable>[] = [
  {
    Id: "UserPhoto",
    numeric: false,
    disablePadding: false,
    label: "Client",
  },
  {
    Id: "UserName",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    Id: "IsCustom",
    numeric: true,
    disablePadding: false,
    label: "Customized",
  },
  {
    Id: "Status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];
