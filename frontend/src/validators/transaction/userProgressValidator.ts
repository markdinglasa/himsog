import * as yup from "yup";

export const userProgressValidator = () => {
  return yup.object().shape({
    UserMealPlanId: yup.number().integer().positive().required(),
    BMI: yup.number().positive().required(),
  });
};
