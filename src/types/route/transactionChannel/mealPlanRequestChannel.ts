export enum MealPlanRequestChannel {
  MEAL_PLAN_REQUEST = "/transaction/meal-plan-request",
  MEAL_PLAN_REQUEST_ID = "/transaction/meal-plan-request/:Id",
  MEAL_PLAN_REQUEST_PARENT = "/transaction/meal-plan-request/u?=:Id",
  MEAL_PLAN_REQUEST_ADVOCATE = "/transaction/meal-plan-request/advocate/:Id",
  MEAL_PLAN_REQUEST_NUTRITIONIST = "/transaction/meal-plan-request/nutritionist/:Id",
}
