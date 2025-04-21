import { Id, Logs } from "../../utils";
export interface MealPlanTable extends Id, Logs {
  UserId: number;
  UserFullname?: string;
  UserImage?: string;
  Name: string;
  Type: string;
  Price: number;
  Description: string | null;
  Duration: number; // Number of days
  Diet: string;
  Rating?: number;
  Sold?: number;
  Status?: string;
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
