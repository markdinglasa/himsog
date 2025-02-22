import { Id, Logs } from "../../utils";
export interface NutritionFactTable extends Id, Logs {
  MealId: number;
  Name: string;
  Description: string;
  Percent: number;
}
export type NutritionFactTables = NutritionFactTable[];
export const NutritionFactInitial: NutritionFactTable = {
  Name: "",
  Description: "",
  Percent: 0,
  MealId: 0,
};
