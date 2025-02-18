export enum MealPlanRequestChannel {
  MEAL_PLAN_REQUEST_GET = "/transaction/meal-plan-request/get/:Id",
  MEAL_PLAN_REQUEST_GET_ALL = "/transaction/meal-plan-request/get-all/:Id", // UserId
  MEAL_PLAN_REQUEST_NEW = "/transaction/appointment/new",
  MEAL_PLAN_REQUEST_REMOVE = "/transaction/appointment/remove/:Id",
  MEAL_PLAN_REQUEST_UPDATE = "/transaction/appointment/update/:Id",
}
