import * as yup from "yup";

export const mealPlanValidator = () => {
  return yup.object().shape({
    UnitId: yup.number().integer().positive().required(),
    Name: yup.string().required(),
    Description: yup.string().nullable().optional(),
    Type: yup.string().required(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
