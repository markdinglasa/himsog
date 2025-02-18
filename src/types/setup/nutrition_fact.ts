import { Id, Logs } from "../generic";

export interface NutritionFactTable extends Id, Logs {
  Name: string;
  Description: string;
  Percent: number;
}
export type NutritionFactTables = NutritionFactTable[];
export const NutritionFactInitial: NutritionFactTable = {
  Name: "",
  Description: "",
  Percent: 0,
};
