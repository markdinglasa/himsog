import { BASE_URL } from "../../../shared";

export const UserMealPlanChannel = {
  USER_MEAL_PLAN: `${BASE_URL}/transaction/user-meal-plan`,
  USER_MEAL_PLANS: `${BASE_URL}/transaction/user-meal-plans?user=:user&mealplan=:mealplan&active=:active`,
  USER_MEAL_PLAN_ID: `${BASE_URL}/transaction/user-meal-plan/:Id`,
  USER_MEAL_PLAN_PARENT: `${BASE_URL}/transaction/user-meal-plan/u/:Id`,
  USER_MEAL_PLAN_GET: `${BASE_URL}/transaction/user-meal-plan/:MealPlanId/:UserId`,
  USER_MEAL_PLAN_ACTIVE: `${BASE_URL}/transaction/user-meal-plan/active/:Id`,
};
