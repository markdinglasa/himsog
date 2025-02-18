import { Id, Logs } from "../generic";

export interface HealthTable extends Id, Logs {
  UserId: number; // FK to UserTable
  Weight: number;
  Height: number;
  FitnessGoal: string;
  ActivityLevel: string;
  PrimaryDiet: string;
  DieteryPreferences: string;
  FoodPreferences: string;
}
export type HealthTables = HealthTable[];
export const HealthInitial: HealthTable = {
  UserId: 0,
  Weight: 0,
  Height: 0,
  FitnessGoal: "",
  ActivityLevel: "",
  PrimaryDiet: "",
  DieteryPreferences: "",
  FoodPreferences: "",
};
