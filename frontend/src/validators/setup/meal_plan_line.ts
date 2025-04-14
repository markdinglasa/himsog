import * as yup from "yup";

export const mealPlanLineValidator = () => {
  return yup.object().shape({
    MealPlanId: yup.number().integer().positive().required(), // Parent
    MealId: yup.number().integer().required(), // Child
    IsBreakfast: yup.boolean().required(),
    IsLunch: yup.boolean().required(),
    IsSnack: yup.boolean().required(),
    IsDinner: yup.boolean().required(),
  });
};
