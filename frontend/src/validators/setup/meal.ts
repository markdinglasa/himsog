import * as yup from "yup";

export const mealValidator = () => {
  return yup.object().shape({
    Name: yup.string().required(),
    Recipe: yup.string().nullable().optional(),
    Image: yup.string().nullable().optional(),
    Allergen: yup.string().nullable().optional(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
