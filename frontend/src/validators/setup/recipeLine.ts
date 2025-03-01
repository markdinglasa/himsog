import * as yup from "yup";

export const recipeLineValidator = () => {
  return yup.object().shape({
    RecipeId: yup.number().integer().positive().required(), // Parent
    IngredientId: yup.number().integer().positive().required(), // Child
  });
};
