import * as yup from "yup";

export const healthConditionValidator = () => {
  return yup.object().shape({
    HealthId: yup.number().integer().positive().required(),
    Category: yup.string().required(),
    Description: yup.string().nullable().optional(),
  });
};
