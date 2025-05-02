import { Id, Logs } from "../generic";

export interface IngredientTable extends Id, Logs {
  Name: string;
  Quantity: number;
  UnitId: number;
  MealId: number;
}
export type IngredientTables = IngredientTable[];
export const IngredientInitial: IngredientTable = {
  Name: "",
  Quantity: 0,
  UnitId: 0,
  MealId: 0,
};
