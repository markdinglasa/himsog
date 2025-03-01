export enum MealPlanChannel {
  MEAL_PLAN_GET = "/setup/meal-plan/get/:Id",
  MEAL_PLAN_GET_ALL = "/setup/meal-plan/get-all/:Id", //UserId
  MEAL_PLAN_NEW = "/setup/meal-plan/new",
  MEAL_PLAN_REMOVE = "/setup/meal-plan/remove/:Id",
  MEAL_PLAN_UPDATE = "/setup/meal-plan/update/:Id",

  MEAL_PLAN = "/setup/meal-plan",
  MEAL_PLAN_ID = "/setup/meal-plan/:Id",
  MEAL_PLAN_PARENT = "/setup/meal-plan/user?=:Id",
}
