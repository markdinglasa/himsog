export enum MealChannel {
  MEAL_GET = "/setup/meal/get/:Id",
  MEAL_GET_ALL = "/setup/meal/get-all/:Id", // MealPlanId
  MEAL_NEW = "/setup/meal/new",
  MEAL_REMOVE = "/setup/meal/remove/:Id",
  MEAL_UPDATE = "/setup/meal/update/:Id",

  MEAL = "/setup/meal",
  MEAL_ID = "/setup/meal/:Id",
}
