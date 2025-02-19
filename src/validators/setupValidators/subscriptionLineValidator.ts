import Joi from "joi";

export const subscriptionLineValidator = Joi.object({
  SubscriptionId: Joi.number().integer().positive().required(),
  UserId: Joi.number().integer().positive().required(),
  DateStart: Joi.date().required(),
  DateEnd: Joi.date().required(),
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
