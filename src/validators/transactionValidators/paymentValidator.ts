import Joi from "joi";

export const paymentValidator = Joi.object({
  TransactionDate: Joi.date().required(),
  TransactionId: Joi.string().required(),
  UserId: Joi.number().integer().positive().required(),
  SubscriptionId: Joi.number().integer().positive().required(),
  Currency: Joi.string().required(),
  Amount: Joi.number().positive().required(),
  Method: Joi.string().required(),
  Token: Joi.string().required(),
  BillingAddress: Joi.string().allow("").allow(null).optional(),
  Status: Joi.string().required(),
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
