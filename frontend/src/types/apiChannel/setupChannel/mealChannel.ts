import { BASE_URL } from "../../../shared";

export const MealChannel = {
  MEAL: `${BASE_URL}/setup/meal`,
  MEAL_ID: `${BASE_URL}/setup/meal/:Id`,
  MEAL_PARENT: `${BASE_URL}/setup/meal/u?=:Id`,
};
