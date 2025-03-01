export enum MealPlanRequestChannel {
  MEAL_PLAN_REQUEST_GET = "/transaction/meal-plan-request/get/:Id",
  MEAL_PLAN_REQUEST_GET_ALL = "/transaction/meal-plan-request/get-all/:Id", // UserId
  MEAL_PLAN_REQUEST_NEW = "/transaction/appointment/new",
  MEAL_PLAN_REQUEST_REMOVE = "/transaction/appointment/remove/:Id",
  MEAL_PLAN_REQUEST_UPDATE = "/transaction/appointment/update/:Id",

  MEAL_PLAN_REQUEST = "/transactoin/meal-plan-request",
  MEAL_PLAN_REQUEST_ID = "/transactoin/meal-plan-request/:Id",
  MEAL_PLAN_REQUEST_PARENT = "/transactoin/meal-plan-request/meal-plan?=:Id",
}
