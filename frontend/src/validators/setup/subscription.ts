import * as yup from "yup";

export const subscriptionValidator = () => {
  return yup.object().shape({
    Name: yup.string().required(),
    Description: yup.string().nullable().optional(),
    Duration: yup.number().required(),
    Price: yup.number().required(),
    CreatedBy: yup.number().integer().positive().required(),
  });
};
