import { BASE_URL } from "../../../shared";

export const MealPlanRequestChannel = {
  MEAL_PLAN_REQUEST: `${BASE_URL}/transaction/meal-plan-request`,
  MEAL_PLAN_REQUEST_ID: `${BASE_URL}/transaction/meal-plan-request/:Id`,
  MEAL_PLAN_REQUEST_PARENT: `${BASE_URL}/transaction/meal-plan-request/u?=:Id`,
};
