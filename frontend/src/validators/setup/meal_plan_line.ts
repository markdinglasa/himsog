import * as yup from "yup";

export const mealPlanLineValidator = () => {
  return yup.object().shape({
    MealPlanId: yup.number().integer().positive().required(), // Parent
    Meal: yup.number().integer().positive().required(), // Child
  });
};
