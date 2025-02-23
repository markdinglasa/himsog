import Joi from "joi";

export const userValidator = Joi.object({
  Email: Joi.string().email().required(),
  Password: Joi.string().min(8).allow("").allow(null).required(),
  Firstname: Joi.string()
    .pattern(/^[A-Za-z\s.,-]+$/)
    .required(),
  BirthDate: Joi.date().required(),
  Lastname: Joi.string()
    .pattern(/^[A-Za-z\s.,-]+$/)
    .required(),
  Middlename: Joi.string()
    .pattern(/^[A-Za-z\s.,-]+$/)
    .allow(null)
    .optional(),
  ContactNumber: Joi.string()
    .pattern(/^(09|\+639)\d{9}$/)
    .allow(null)
    .optional(),
  CivilStatus: Joi.string()
    .valid("single", "married", "divorced", "widowed", "legally-separated")
    .required(),
  Role: Joi.string()
    .valid("superuser", "administrator", "client", "nutritionist")
    .required(),
  ProfilePhoto: Joi.string().allow("").allow(null).optional(),
  IsSuspended: Joi.boolean().required(),
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
