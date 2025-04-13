import { Id, Logs } from "../../utils";
export interface NutritionFactTable extends Id, Logs {
  MealId: number;
  Name: string;
  UnitId: number;
  UnitName?: string;
  Quantity: number;
}
export type NutritionFactTables = NutritionFactTable[];
export const NutritionFactInitial: NutritionFactTable = {
  Name: "",
  Quantity: 0,
  UnitId: 0,
  MealId: 0,
};
