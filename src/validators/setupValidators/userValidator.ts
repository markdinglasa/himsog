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
    .allow("")
    .allow(null)
    .optional(),
  ContactNumber: Joi.string()
    .pattern(/^(09|\+639)\d{9}$/)
    .allow(null)
    .optional(),
  CivilStatus: Joi.string()
    .valid("single", "married", "divorced", "widowed", "legally-separated")
    .required(),
  Religion: Joi.string().required(),
  Role: Joi.string()
    .valid("superuser", "administrator", "advocate", "nutritionist")
    .required(),
  ProfilePhoto: Joi.string().allow("").allow(null).optional(),
  GoogleId: Joi.string().allow("").allow(null).optional(),
  Gender: Joi.string().valid("male", "female", "other").required(),
  IsSuspended: Joi.boolean().required(),
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});

export const userEmailValidator = Joi.object({
  Password: Joi.string().required(),
  Email: Joi.string().email().required(),
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});

export const userPasswordValidator = Joi.object({
  Password: Joi.string().required(),
  CurrentPassword: Joi.string().required(),
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
