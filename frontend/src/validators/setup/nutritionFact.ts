import * as yup from "yup";

export const nutritionFactValidator = () => {
  return yup.object().shape({
    MealId: yup.number().integer().positive().required(),
    Name: yup.string().required(),
    Quantity: yup.number().positive().optional(),
    Kilocalorie: yup.number().positive().optional(),
    UnitId: yup.number().integer().positive().required(),
  });
};
