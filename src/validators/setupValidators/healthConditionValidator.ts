import Joi from "joi";

export const healthConditionValidator = Joi.object({
  //other
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
