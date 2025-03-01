import * as yup from "yup";

export const recipeValidator = () => {
  return yup.object().shape({
    Name: yup.string().required(),
    Description: yup.string().nullable().optional(),
    Instructions: yup.string().required(),
    Image: yup.string().nullable().optional(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
