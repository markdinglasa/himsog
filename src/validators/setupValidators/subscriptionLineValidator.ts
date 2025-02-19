import Joi from "joi";

export const subscriptionLineValidator = Joi.object({
  //other
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
