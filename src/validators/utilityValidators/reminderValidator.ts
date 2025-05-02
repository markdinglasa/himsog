import Joi from "joi";

export const reminderValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  Description: Joi.string().allow("").allow(null).optional(),
  Alarm: Joi.date().required(),
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
