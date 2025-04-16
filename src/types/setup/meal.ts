import { Id, Logs } from "../generic";

export interface MealTable extends Id, Logs {
  UserId: number;
  Name: string;
  Recipe: string;
  Image: string | null;
  Allergen: string | null;
  Kilocalorie?: number;
}
export type MealTables = MealTable[];
export const MealInitial: MealTable = {
  Name: "",
  Recipe: "",
  Image: null,
  Allergen: null,
  UserId: 0,
};
