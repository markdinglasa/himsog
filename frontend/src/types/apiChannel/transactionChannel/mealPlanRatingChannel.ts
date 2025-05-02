import { BASE_URL } from "../../../shared";

export const MealPlanRatingChannel = {
  MEAL_PLAN_RATING: `${BASE_URL}/transaction/meal-plan-rating`,
  MEAL_PLAN_RATING_ID: `${BASE_URL}/transaction/meal-plan-rating/:MealPlanId/:UserId`,
  MEAL_PLAN_RATINGS: `${BASE_URL}/transaction/meal-plan-ratings?mealplan=:mealplan&page=:page`,
};
