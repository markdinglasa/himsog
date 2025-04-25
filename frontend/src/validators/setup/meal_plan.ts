import * as yup from "yup";

export const mealPlanValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Name: yup.string().required(),
    Description: yup.string().nullable().optional(),
    Type: yup.string().required(),
    Price: yup.number().optional(),
    Duration: yup.number().positive().required(),
    IsPublic: yup.boolean().required(),
  });
};
