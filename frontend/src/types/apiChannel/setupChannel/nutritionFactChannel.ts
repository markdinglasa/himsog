import { BASE_URL } from "../../../shared";

export const NutritionFactChannel = {
  NUTRITION_FACT: `${BASE_URL}/setup/nutrition-fact`,
  NUTRITION_FACT_ID: `${BASE_URL}/setup/nutrition-fact/:Id`,
  NUTRITION_FACT_PARENT: `${BASE_URL}/setup/nutrition-fact/meal?=:Id`,
};
