export enum NutritionFactChannel {
  NUTRITION_FACT_GET = "/setup/nutrition-fact/get/:Id",
  NUTRITION_FACT_GET_ALL = "/setup/nutrition-fact/get-all/:Id", // MealId
  NUTRITION_FACT_NEW = "/setup/nutrition-fact/new",
  NUTRITION_FACT_REMOVE = "/setup/nutrition-fact/remove/:Id",
  NUTRITION_FACT_UPDATE = "/setup/nutrition-fact/update/:Id",

  NUTRITION_FACT = "/setup/nutrition-fact",
  NUTRITION_FACT_ID = "/setup/nutrition-fact/:Id",
  NUTRITION_FACT_PARENT = "/setup/nutrition-fact/meal/:Id",
}
