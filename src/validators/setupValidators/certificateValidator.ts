import Joi from "joi";

export const certificateValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  Name: Joi.string()
    .pattern(/^[A-Za-z\s.,]+$/)
    .required(),
  IssuedTo: Joi.string()
    .pattern(/^[A-Za-z\s.,]+$/)
    .required(),
  Issuer: Joi.string()
    .pattern(/^[A-Za-z\s.,]+$/)
    .required(),
  ExpiryDate: Joi.date().required(),
  CertificateType: Joi.string().required(),
  CertificateNumber: Joi.string()
    .pattern(/^[0-9-z\s.,]+$/)
    .required(),
  AttachmentURL: Joi.string().allow("").allow(null).optional(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
