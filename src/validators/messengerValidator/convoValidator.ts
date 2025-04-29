import Joi from "joi";

export const convoValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  Name: Joi.string().required(),
  LastMessage: Joi.string().allow("").required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
