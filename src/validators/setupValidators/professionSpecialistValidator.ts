import Joi from "joi";

export const professionSpecialistValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  Title: Joi.string()
    .pattern(/^[A-Za-z\s.,&]+$/)
    .required(),
  Description: Joi.string().allow("").allow(null).optional(),
  Experience: Joi.number().precision(2).required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
