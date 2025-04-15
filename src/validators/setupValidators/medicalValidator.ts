import Joi from "joi";

export const medicalValidator = Joi.object({
  UserId: Joi.number().integer().positive().required(),
  DiagnosedCondition: Joi.object().allow(null).optional(),
  Medication: Joi.string().allow("").allow(null).optional(),
  FamilyMedicalHistory: Joi.object().allow(null).optional(),
  SurgicalHistory: Joi.string().allow("").allow(null).optional(),
  NoSleep: Joi.number().integer().positive().required(),
  StressLevel: Joi.string().required(),
  Smoke: Joi.string().required(),
  Alcohol: Joi.string().required(),
  Pregnant: Joi.string().required(),
  BowelMovement: Joi.string().required(),
  LabResult: Joi.string().allow("").allow(null).optional(),
  BloodSugar: Joi.number().required(),
  Cholesterol: Joi.number().required(),
  Creatinine: Joi.number().required(),
  MentalHealth: Joi.string().allow("").allow(null).optional(),
  IsConsulted: Joi.boolean().required(),
  DateCreated: Joi.date().optional(),
  DateUpdated: Joi.date().allow(null).optional(),
});
