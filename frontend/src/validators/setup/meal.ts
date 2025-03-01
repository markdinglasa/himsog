import * as yup from "yup";

export const mealValidator = () => {
  return yup.object().shape({
    Name: yup.string().required(),
    Description: yup.string().nullable().optional(),
    Type: yup.string().required(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
