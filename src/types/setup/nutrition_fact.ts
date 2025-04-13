import { Id, Logs } from "../generic";

export interface NutritionFactTable extends Id, Logs {
  MealId: number;
  Name: string;
  UnitId: number;
  Quantity: number;
}
export type NutritionFactTables = NutritionFactTable[];
export const NutritionFactInitial: NutritionFactTable = {
  Name: "",
  MealId: 0,
  UnitId: 0,
  Quantity: 0,
};
