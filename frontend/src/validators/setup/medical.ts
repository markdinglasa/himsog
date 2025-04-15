import * as yup from "yup";

export const medicalValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    DiagnosedCondition: yup.object().nullable().optional(),
    Medication: yup.string().nullable().optional(),
    FamilyMedicalHistory: yup.object().nullable().optional(),
    SurgicalHistory: yup.string().nullable().optional(),
    NoSleep: yup.number().integer().positive().required(),
    StressLevel: yup.string().required(),
    Smoke: yup.string().required(),
    Alcohol: yup.string().required(),
    Pregnant: yup.string().required(),
    BowelMovement: yup.string().required(),
    LabResult: yup.string().nullable().optional(),
    MentalHealth: yup.string().nullable().optional(),
    BloodSugar: yup.number().integer().positive().required(),
    Cholesterol: yup.number().integer().positive().required(),
    Creatinine: yup.number().integer().positive().required(),
    IsConsulted: yup.boolean().required(),
  });
};
