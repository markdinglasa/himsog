export enum RecipeLineChannel {
  RECIPE_LINE_GET = "/setup/recipe-line/get/:Id", // RecipeId
  RECIPE_LINE_GET_ALL = "/setup/recipe-line/get-all",
  RECIPE_LINE_NEW = "/setup/recipe-line/new",
  RECIPE_LINE_REMOVE = "/setup/recipe-line/remove/:Id",
  RECIPE_LINE_UPDATE = "/setup/recipe-line/update/:Id",

  RECIPE_LINE = "/setup/recipe-line",
  RECIPE_LINE_ID = "/setup/recipe-line/:Id",
  RECIPE_LINE_PARENT = "/setup/recipe-line/recipe?=:Id",
}
