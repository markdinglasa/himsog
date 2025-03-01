import { BASE_URL } from "../../../shared";

export const RecipeLineChannel = {
  RECIPE_LINE: `${BASE_URL}/setup/recipe-line`,
  RECIPE_LINE_ID: `${BASE_URL}/setup/recipe-line/:Id`,
  RECIPE_LINE_PARENT: `${BASE_URL}/setup/recipe-line/recipe?=:Id`,
};
