import * as yup from "yup";

export const mealPlanRatingValidator = () => {
  return yup.object().shape({
    MealPlanId: yup.number().integer().positive().required(),
    Rate: yup.number().integer().positive().required(),
    Remarks: yup.string().nullable().optional(),
    IsHidden: yup.boolean().default(false).required(),
    CreatedBy: yup.number().integer().positive().required(),
    UpdatedBy: yup.number().integer().positive().nullable().optional(),
  });
};
