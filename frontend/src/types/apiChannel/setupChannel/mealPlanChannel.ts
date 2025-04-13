import { BASE_URL } from "../../../shared";

export const MealPlanChannel = {
  MEAL_PLAN: `${BASE_URL}/setup/meal-plan`,
  MEAL_PLAN_ID: `${BASE_URL}/setup/meal-plan/:Id`,
  MEAL_PLAN_PARENT: `${BASE_URL}/setup/meal-plan/u?=:Id`,
  MEAL_PLAN_FILTER: `${BASE_URL}/setup/mea-plans?filter=:filter&page=:page`,
};
