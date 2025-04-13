import * as yup from "yup";

export const nutritionFactValidator = () => {
  return yup.object().shape({
    MealId: yup.number().integer().positive().required(),
    Name: yup.string().required(),
    Quantity: yup.string().nullable().optional(),
    UnitId: yup.number().integer().positive().required(),
  });
};
