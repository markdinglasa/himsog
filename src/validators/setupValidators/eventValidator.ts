import Joi from "joi";

export const eventValidator = Joi.object({
  Title: Joi.string()
    .pattern(/^[A-Za-z\s.,&-]+$/)
    .required(),
  Category: Joi.string()
    .pattern(/^[A-Za-z\s.,&-]+$/)
    .required(),
  Type: Joi.string()
    .pattern(/^[A-Za-z\s.,&-]+$/)
    .required(),
  Description: Joi.string().allow("").allow(null).optional(),
  ScheduleDate: Joi.string().required(),
  Location: Joi.string().required(),
  ContactPerson: Joi.string().required(),
  ContactNumber: Joi.string().required(),
  ContactEmail: Joi.string().email().required(),
  RegistrationLink: Joi.string().uri().allow("").allow(null).required(),
  IsValidated: Joi.boolean().required(),
  Image: Joi.string().allow("").allow(null).optional(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
