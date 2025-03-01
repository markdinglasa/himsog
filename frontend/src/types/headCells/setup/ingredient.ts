import { HeadCell } from "../../components";
import { IngredientTable } from "../../dbtables";

export const ingredientHC: HeadCell<IngredientTable>[] = [
  {
    Id: "Name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    Id: "Category",
    numeric: false,
    disablePadding: false,
    label: "Category",
  },
  {
    Id: "UnitName",
    numeric: true,
    disablePadding: false,
    label: "Unit",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
