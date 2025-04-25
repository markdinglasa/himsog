import * as yup from "yup";

export const mealPlanRequestValidator = () => {
  return yup.object().shape({
    AdvocateId: yup.number().integer().positive().required(),
    NutritionistId: yup.number().integer().positive().required(),
    MealPlanId: yup.number().integer().positive().nullable().optional(),
    Remarks: yup.string().nullable().optional(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
