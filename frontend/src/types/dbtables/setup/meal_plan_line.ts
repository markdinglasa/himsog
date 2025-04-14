import { Id, Logs } from "../../utils";
export interface MealPlanLineTable extends Id, Logs {
  MealPlanId: number;
  MealId: number;
  IsBreakfast: boolean;
  IsLunch: boolean;
  IsSnack: boolean;
  IsDinner: boolean;
  MealName?: string;
  MealKilocalorie?: number;
  MealImage?: string | null;
}
export type MealPlanLineTables = MealPlanLineTable[];
export const MealPlanLineInitial: MealPlanLineTable = {
  MealPlanId: 0,
  MealId: 0,
  IsBreakfast: false,
  IsLunch: false,
  IsSnack: false,
  IsDinner: false,
};
