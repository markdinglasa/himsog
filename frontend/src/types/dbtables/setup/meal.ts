import { Id, Logs } from "../../utils";
export interface MealTable extends Id, Logs {
  Name: string;
  Image: string | null;
  Recipe: string;
  Allergen: string | null;
  Kilocalorie?: number;
}
export type MealTables = MealTable[];
export const MealInitial: MealTable = {
  Name: "",
  Image: null,
  Recipe: "",
  Allergen: null,
};
