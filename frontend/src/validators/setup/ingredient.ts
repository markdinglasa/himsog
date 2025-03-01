import * as yup from "yup";

export const ingredientValidator = () => {
  return yup.object().shape({
    Name: yup.string().required(),
    Description: yup.string().nullable().optional(),
    Category: yup.string().required(),
    UnitId: yup.number().integer().positive().required(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
