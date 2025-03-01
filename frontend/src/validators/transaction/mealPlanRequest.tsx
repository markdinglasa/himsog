import * as yup from "yup";

export const mealPlanRequestValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    NutritionistId: yup.number().integer().positive().required(),
    Duration: yup.number().required(),
    IsCustom: yup.boolean().required(),
    MealPlanRecipeId: yup.number().integer().positive().required(),
    Status: yup.string().required(),
    Remarks: yup.string().nullable().optional(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
