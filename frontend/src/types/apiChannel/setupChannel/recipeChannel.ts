import { BASE_URL } from "../../../shared";

export const RecipeChannel = {
  RECIPE: `${BASE_URL}/setup/recipe`,
  RECIPE_ID: `${BASE_URL}/setup/recipe/:Id`,
  RECIPE_PARENT: `${BASE_URL}/setup/recipe/u?=:Id`,
};
