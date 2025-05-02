import { Id, Logs } from "../generic";

export interface MealPlanRequestTable extends Id, Logs {
  AdvocateId: number; // FK to UserTable
  UserFullname?: string;
  UserPhoto?: string | null;
  NutritionistId: number; // FK to UserTable
  Remarks: string | null;
  MealPlanId: number | null;
}
export type MealPlanRequestTables = MealPlanRequestTable[];
export const MealPlanRequestInitial: MealPlanRequestTable = {
  AdvocateId: 0,
  NutritionistId: 0,
  Remarks: null,
  MealPlanId: null,
};
