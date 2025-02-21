import { Id, Logs } from "../generic";

export interface MealPlanLineTable extends Id, Logs {
  MealPlanId: number;
  MealId: number;
}
export type MealPlanLineTables = MealPlanLineTable[];
export const MealPlanLineInitial: MealPlanLineTable = {
  MealPlanId: 0,
  MealId: 0,
};
