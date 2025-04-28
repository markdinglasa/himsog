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
  IsMonday: boolean;
  IsTuesday: boolean;
  IsWednesday: boolean;
  IsThursday: boolean;
  IsFriday: boolean;
  IsSaturday: boolean;
  IsSunday: boolean;
}
export type MealPlanLineTables = MealPlanLineTable[];
export const MealPlanLineInitial: MealPlanLineTable = {
  MealPlanId: 0,
  MealId: 0,
  IsBreakfast: false,
  IsLunch: false,
  IsSnack: false,
  IsDinner: false,
  IsMonday: false,
  IsTuesday: false,
  IsWednesday: false,
  IsThursday: false,
  IsFriday: false,
  IsSaturday: false,
  IsSunday: false,
};
