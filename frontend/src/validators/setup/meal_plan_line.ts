import * as yup from "yup";

export const mealPlanLineValidator = () => {
  return yup.object().shape({
    MealPlanId: yup.number().integer().positive().required(), // Parent
    MealId: yup.number().integer().required(), // Child
    IsBreakfast: yup.boolean().required(),
    IsLunch: yup.boolean().required(),
    IsSnack: yup.boolean().required(),
    IsDinner: yup.boolean().required(),
    IsMonday: yup.boolean().required(),
    IsTuesday: yup.boolean().required(),
    IsWednesday: yup.boolean().required(),
    IsThursday: yup.boolean().required(),
    IsFriday: yup.boolean().required(),
    IsSaturday: yup.boolean().required(),
    IsSunday: yup.boolean().required(),
  });
};
