import { Id, Logs } from "../../utils";
import { AppoinmentStatus } from "./appointment";

export interface MealPlanRequestTable extends Id, Logs {
  UserId: number; // FK to UserTable
  NutritionistId: number; // FK to UserTable
  Duration: number; // Number of days
  Remarks: string | null;
  IsCustom: boolean;
  MealPlanRecipe: number | null;
  Status: AppoinmentStatus;
}
export type MealPlanRequestTables = MealPlanRequestTable[];
export const MealPlanRequestInitial: MealPlanRequestTable = {
  UserId: 0,
  NutritionistId: 0,
  Duration: 0,
  Remarks: null,
  Status: AppoinmentStatus.DEFAULT,
  IsCustom: false,
  MealPlanRecipe: null,
};
