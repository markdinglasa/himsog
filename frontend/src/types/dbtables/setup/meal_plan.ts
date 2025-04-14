import { Id, Logs } from "../../utils";
export interface MealPlanTable extends Id, Logs {
  UserId: number;
  Name: string;
  Type: string;
  Price: number;
  Description: string | null;
  Duration: number; // Number of days
  Diet: string;
}
export type MealPlanTables = MealPlanTable[];
export const MealPlanInitial: MealPlanTable = {
  UserId: 0,
  Name: "",
  Type: "",
  Description: null,
  Duration: 0,
  Price: 0,
  Diet: "",
};
