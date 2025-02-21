import { Id, Logs } from "../generic";

export interface MealPlanTable extends Id, Logs {
  UserId: number;
  Name: string;
  Type: string;
  Description: string | null;
  Duration: number; // Number of days
}
export type MealPlanTables = MealPlanTable[];
export const MealPlanInitial: MealPlanTable = {
  UserId: 0,
  Name: "",
  Type: "",
  Description: null,
  Duration: 0,
};
