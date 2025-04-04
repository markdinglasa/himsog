import { Id, Logs } from "../../utils";

export interface IngredientTable extends Id, Logs {
  Name: string;
  Description: string | null;
  UnitId: number;
  UnitName?: string;
  Category: string;
  UserId: number;
}
export type IngredientTables = IngredientTable[];
export const IngredientInitial: IngredientTable = {
  Name: "",
  Description: null,
  UnitId: 0,
  Category: "",
  UserId: 0,
};
