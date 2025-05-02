import * as yup from "yup";

export const medicalValidator = () => {
  return yup.object().shape({
    UserId: yup.number().integer().positive().required(),
    DiagnosedCondition: yup
      .object()
      .shape({
        IsDiabetesType1: yup.boolean().optional(),
        IsGERD: yup.boolean().optional(),
        IsHyperlipidemia: yup.boolean().optional(),
        IsDiabetesType2: yup.boolean().optional(),
        IsChronicKidneyDisease: yup.boolean().optional(),
        IsThyroidDisorders: yup.boolean().optional(),
        IsGastrointestinalDisorder: yup.boolean().optional(),
        IsHypertension: yup.boolean().optional(),
        IsLiverDisorder: yup.boolean().optional(),
        IsPCOS: yup.boolean().optional(),
        IsOther: yup.boolean().optional(),
        OtherCondition: yup.string().nullable().optional(),
      })
      .nullable()
      .optional(),
    Medication: yup.string().nullable().optional(),
    FamilyMedicalHistory: yup
      .object()
      .shape({
        IsDiabetes: yup.boolean().optional(),
        IsCancer: yup.boolean().optional(),
        IsObesity: yup.boolean().optional(),
        IsKidneyDisease: yup.boolean().optional(),
        IsHeartDisease: yup.boolean().optional(),
        IsOther: yup.boolean().optional(),
        OtherCondition: yup.string().nullable().optional(),
      })
      .nullable()
      .optional(),
    SurgicalHistory: yup.string().nullable().optional(),
    NoSleep: yup.number().integer().required(),
    StressLevel: yup.string().required(),
    Smoke: yup.string().required(),
    Alcohol: yup.string().required(),
    Pregnant: yup.string().required(),
    BowelMovement: yup.string().required(),
    LabResult: yup.string().nullable().optional(),
    MentalHealth: yup.string().nullable().optional(),
    BloodSugar: yup.number().required(),
    Cholesterol: yup.number().required(),
    Creatinine: yup.number().required(),
    IsConsulted: yup.boolean().required(),
  });
};
