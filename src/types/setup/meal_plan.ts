import { Id, Logs } from "../generic";

export interface MealPlanTable extends Id, Logs {
  Name: string;
  Type: string;
  Description: string | null;
  Duration: number; // Number of days
}
export type MealPlanTables = MealPlanTable[];
export const MealPlanInitial: MealPlanTable = {
  Name: "",
  Type: "",
  Description: null,
  Duration: 0,
};
