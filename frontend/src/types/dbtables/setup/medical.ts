import { Id, Logs } from "../../utils";

interface DiagnosedConditions {
  IsDiabetesType1: boolean;
  IsCardiovasularDisease: boolean;
  IsGERD: boolean;
  IsHyperlipidemia: boolean;
  IsDiabetesType2: boolean;
  IsChronicKidneyDisease: boolean;
  IsThyroidDisorders: boolean;
  IsGastrointestinalDisorder: boolean;
  IsHypertension: boolean;
  IsLiverDisorder: boolean;
  IsPCOS: boolean;
  IsOther: boolean;
  OtherCondition: string | null;
}
interface FamilyMedicalHistory {
  IsDiabetes: boolean;
  IsCancer: boolean;
  IsObesity: boolean;
  IsKidneyDisease: boolean;
  IsHeartDisease: boolean;
  IsOther: boolean;
  OtherCondition: string | null;
}
export interface MedicalTable extends Id, Logs {
  UserId: number;
  DiagnosedCondition: DiagnosedConditions | null;
  Medication: string | null;
  FamilyMedicalHistory: FamilyMedicalHistory | null;
  SurgicalHistory: string | null;
  NoSleep: number; // average number of sleep
  StressLevel: string;
  Smoke: string;
  Alcohol: string;
  Pregnant: string;
  BowelMovement: string;
  LabResult: string | null;
  BloodSugar: number;
  Cholesterol: number;
  Creatinine: number;
  MentalHealth: string | null;
  IsConsulted: boolean;
}
export type MedicalTables = MedicalTable[];
export const MedicalInitial: MedicalTable = {
  UserId: 0,
  DiagnosedCondition: null,
  Medication: null,
  FamilyMedicalHistory: null,
  SurgicalHistory: null,
  NoSleep: 0,
  StressLevel: "",
  Smoke: "",
  Alcohol: "",
  Pregnant: "",
  BowelMovement: "",
  LabResult: null,
  BloodSugar: 0,
  Cholesterol: 0,
  Creatinine: 0,
  MentalHealth: null,
  IsConsulted: false,
};
