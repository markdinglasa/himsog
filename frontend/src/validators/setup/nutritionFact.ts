import * as yup from "yup";

export const nutritionFactValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    Name: yup.string().required(),
    Description: yup.string().nullable().optional(),
    Percent: yup.number().required(),
  });
};
