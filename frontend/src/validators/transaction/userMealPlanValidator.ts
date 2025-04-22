import * as yup from "yup";

export const userMealPlanValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    MealPlanId: yup.number().integer().positive().required(),
  });
};
