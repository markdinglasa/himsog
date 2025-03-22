import { Id, Logs } from "../generic";

export interface IngredientTable extends Id, Logs {
  Name: string;
  Description: string | null;
  UnitId: number;
  Category: string;
  Quantity: number;
}
export type IngredientTables = IngredientTable[];
export const IngredientInitial: IngredientTable = {
  Name: "",
  Description: null,
  UnitId: 0,
  Category: "",
  Quantity: 0,
};
