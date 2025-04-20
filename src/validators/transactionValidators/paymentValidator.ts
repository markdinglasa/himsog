import Joi from "joi";

export const paymentValidator = Joi.object({
  TransactionDate: Joi.date().required(),
  TransactionId: Joi.string().required(),
  UserId: Joi.number().integer().positive().required(), // PAYEE
  SubscriptionId: Joi.number().integer().positive().allow(null).optional(),
  MealPlanId: Joi.number().integer().positive().allow(null).optional(),
  Currency: Joi.string().required(),
  Amount: Joi.number().required(),
  Method: Joi.string().required(),
  IsSubscription: Joi.boolean().required(),
  SubscriptionData: Joi.object().allow(null).optional(),
  IsMealPlan: Joi.boolean().required(),
  MealPlanData: Joi.object().allow(null).optional(),
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
