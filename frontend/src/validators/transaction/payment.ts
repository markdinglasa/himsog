import * as yup from "yup";

export const paymentValidator = () => {
  return yup.object().shape({
    TransactionDate: yup.date().required(),
    TransactionId: yup.string().required(),
    UserId: yup.number().integer().positive().required(),
    SubscriptionId: yup.number().integer().positive().required(),
    Currency: yup.string().required(),
    Amount: yup.number().required(),
    Method: yup.string().required(),
    Token: yup.string().nullable().optional(),
    BillingAddress: yup.string().nullable().optional(),
    Status: yup.string().required(),
    Country: yup.string().required(),
    ZIPCode: yup.number().integer().positive().required(),
    City: yup.string().required(),
    Holder: yup.string().required(),
    CVCNumber: yup
      .number()
      .required()
      .test("len", "Must be exactly 3 digits", (val) =>
        val ? val.toString().length === 3 : false,
      ), // min of 3 digits max of 3 digits
    ExpiryMonth: yup
      .number()
      .required()
      .min(1, "Month must be at least 1")
      .max(12, "Month must not exceed 12")
      .test("len", "Must be exactly 2 digits", (val) =>
        val ? val.toString().length === 2 : false,
      ), // min of 2 digits max of 3 digits . must not exceed 12 >
    ExpiryYear: yup
      .number()
      .required()
      .test("len", "Must be exactly 2 digits", (val) =>
        val ? val.toString().length === 2 : false,
      ), // min of 2 digits max of 3 digits
    CardNumber: yup.string().min(16).max(16).required(), // min of 16 digits max of 16 digits
  });
};
