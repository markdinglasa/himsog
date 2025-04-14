import { HeadCell } from "../../components";
import { MealTable } from "../../dbtables";

export const MealHC: HeadCell<MealTable>[] = [
  {
    Id: "Image",
    numeric: false,
    disablePadding: true,
    label: "Image",
  },
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
