import { Id, Logs } from "../generic";

export interface UserMealPlan extends Id, Logs {
  UserId: number;
  UserFullname?: string;
  MealPlanId: number;
  MealPlanName?: string;
  IsActive: boolean;
  DateActivated: string | null | Date;
}
export type UserMealPlans = UserMealPlan[];
export const UserMealPlanInitial: UserMealPlan = {
  UserId: 0,
  MealPlanId: 0,
  IsActive: false,
  DateActivated: null,
};
