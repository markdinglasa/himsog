import { Id, Logs } from "../../utils";

export interface UserMealPlan extends Id, Logs {
  UserId: number;
  UserFullname?: string;
  MealPlanId: number;
  MealPlanName?: string;
}
export type UserMealPlans = UserMealPlan[];
export const UserMealPlanInitial: UserMealPlan = {
  UserId: 0,
  MealPlanId: 0,
};
