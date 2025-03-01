import * as yup from "yup";

export const subscriptionLineValidator = () => {
  return yup.object().shape({
    SubscriptionId: yup.number().integer().positive().required(), // Parent
    UserId: yup.number().integer().positive().required(), // Child
    DateStart: yup.string().datetime().required(),
    DateEnd: yup.string().datetime().required(),
  });
};
