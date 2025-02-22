import { Id, Logs } from "../../utils";
export interface MealTable extends Id, Logs {
  Name: string;
  Description: string;
  Type: string;
}
export type MealTables = MealTable[];
export const MealInitial: MealTable = {
  Name: "",
  Description: "",
  Type: "",
};
