import { Id, Logs } from "../../utils";

export interface UserProgress extends Id, Logs {
  UserMealPlanId: number;
  BMI: number;
}
export type UserProgresses = UserProgress[];
export const UserProgressInitial: UserProgress = {
  UserMealPlanId: 0,
  BMI: 0,
};
