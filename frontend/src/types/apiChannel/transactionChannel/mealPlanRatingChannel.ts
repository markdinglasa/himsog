import { BASE_URL } from "../../../shared";

export const MealPlanRatingChannel = {
  MEAL_PLAN_RATING: `${BASE_URL}/transaction/meal-plan-rating`,
  MEAL_PLAN_RATING_ID: `${BASE_URL}/transaction/meal-plan-rating/:Id`,
  MEAL_PLAN_RATING_PARENT: `${BASE_URL}/transaction/meal-plan-rating/mp/:Id`,
};
