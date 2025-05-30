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
