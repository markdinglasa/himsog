import { HeadCell } from "../../components";
import { MealTable } from "../../dbtables";

export const MealHC: HeadCell<MealTable>[] = [
  {
    Id: "Name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    Id: "Kilocalorie",
    numeric: true,
    disablePadding: false,
    label: "Kcal",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
