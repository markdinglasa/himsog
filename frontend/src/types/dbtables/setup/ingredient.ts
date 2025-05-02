import { Id, Logs } from "../../utils";

export interface IngredientTable extends Id, Logs {
  MealId: number;
  Quantity: number;
  Name: string;
  UnitId: number;
  UnitName?: string;
}
export type IngredientTables = IngredientTable[];
export const IngredientInitial: IngredientTable = {
  Name: "",
  UnitId: 0,
  MealId: 0,
  Quantity: 0,
};
