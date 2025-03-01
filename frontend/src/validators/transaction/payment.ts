import * as yup from "yup";

export const paymentValidator = () => {
  return yup.object().shape({
    TransactionDate: yup.string().datetime().required(),
    TransactionId: yup.number().integer().positive().required(),
    UserId: yup.number().integer().positive().required(),
    SubscriptionId: yup.number().integer().positive().required(),
    Currency: yup.string().required(),
    Amount: yup.number().required(),
    Method: yup.string().required(),
    Token: yup.string().required(),
    BillingAddress: yup.string().nullable().optional(),
    Status: yup.string().required(),
  });
};
