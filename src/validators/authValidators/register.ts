import Joi from "joi";

export const registerValidator = Joi.object({
  Email: Joi.string().email().required(),
  Password: Joi.string().min(8).allow("").allow(null).required(),
  Firstname: Joi.string().allow("").allow(null).optional(),
  BirthDate: Joi.string().allow("").allow(null).optional(),
  Lastname: Joi.string().allow("").allow(null).optional(),
  Middlename: Joi.string().allow("").allow(null).optional(),
  ContactNumber: Joi.string().allow("").allow(null).optional(),
  CivilStatus: Joi.string().allow("").allow(null).optional(),
  Role: Joi.string()
    .valid("superuser", "administrator", "client", "nutritionist")
    .required(),
  ProfilePhoto: Joi.string().allow("").allow(null).optional(),
  IsSuspended: Joi.boolean().required(),
  Religion: Joi.string().allow("").optional(),
  Gender: Joi.string().allow("").allow(null).optional(),
  DateCreated: Joi.date().iso().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
