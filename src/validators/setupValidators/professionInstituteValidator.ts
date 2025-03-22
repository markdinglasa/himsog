import Joi from "joi";

export const professionInstituteValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  Name: Joi.string()
    .pattern(/^[A-Za-z\s.,&]+$/)
    .required(),
  Address: Joi.string().allow("").allow(null).optional(),
  DateStarted: Joi.date().required(),
  DateEnded: Joi.date().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
