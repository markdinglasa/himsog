import { BASE_URL } from "../../../shared";

export const MealPlanChannel = {
  MEAL_PLAN: `${BASE_URL}/setup/meal-plan`,
  MEAL_PLAN_DETAILS: `${BASE_URL}/setup/meal-plans/d?UserId=:UserId&MealPlanId=:MealPlanId`,
  MEAL_PLAN_ID: `${BASE_URL}/setup/meal-plan/:Id`,
  MEAL_PLAN_PARENT: `${BASE_URL}/setup/meal-plan/user/:Id`,
  MEAL_PLAN_FILTER: `${BASE_URL}/setup/meal-plans?filter=:filter&page=:page`,
};
