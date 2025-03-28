import Joi from "joi";

export const eventValidator = Joi.object({
  Title: Joi.string()
    .pattern(/^[0-9A-Za-z\s.,&-]+$/)
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
  TimeStart: Joi.string().required(),
  TimeEnd: Joi.string().required(),
  Image: Joi.string().allow("").allow(null).optional(),
  RegistrationLink: Joi.string().uri().allow("").allow(null).required(),
  IsValidated: Joi.boolean().allow(null).optional(),
  Remarks: Joi.string().allow("").allow(null).required(),
  CreatedBy: Joi.number().integer().positive().optional(),
  DateCreated: Joi.date().optional(),
  UpdatedBy: Joi.number().integer().positive().allow(null).optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
