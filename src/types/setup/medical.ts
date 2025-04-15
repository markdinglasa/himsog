import { Id, Logs } from "../generic";

export interface MedicalTable extends Id, Logs {
  UserId: number;
  DiagnosedCondition: JSON | null;
  Medication: string | null;
  FamilyMedicalHistory: JSON | null;
  SurgicalHistory: string | null;
  NoSleep: number; // average number of sleep
  StressLevel: string;
  Smoke: string;
  Alchohol: string;
  Pregant: string;
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
  Alchohol: "",
  Pregant: "",
  BowelMovement: "",
  LabResult: null,
  BloodSugar: 0,
  Cholesterol: 0,
  Creatinine: 0,
  MentalHealth: null,
  IsConsulted: false,
};
