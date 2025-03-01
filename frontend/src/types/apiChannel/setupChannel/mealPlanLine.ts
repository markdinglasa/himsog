import { BASE_URL } from "../../../shared";

export const MealPlanLineChannel = {
  MEAL_PLAN_LINE: `${BASE_URL}/setup/meal-plan-line`,
  MEAL_PLAN_LINE_ID: `${BASE_URL}/setup/meal-plan-line/:Id`,
  MEAL_PLAN_LINE_PARENT: `${BASE_URL}/setup/meal-plan-line/meal-plan?=:Id`,
};
