import { Id, Logs } from "../generic";

export enum AppoinmentStatus {
  DEFAULT = "",
  CLOSED = "closed",
  IN_PROGRESS = "in-progress",
  OPEN = "open",
}
export interface AppointmentTable extends Id, Logs {
  ClientId: number; // FK to UserTable
  NutritionistId: number; // FK to UserTable
  Schedule: string;
  Status: AppoinmentStatus;
  Remarks: string;
}
export type AppointmentTables = AppointmentTable[];
export const AppoinmentInitial: AppointmentTable = {
  ClientId: 0,
  NutritionistId: 0,
  Schedule: "",
  Status: AppoinmentStatus.DEFAULT,
  Remarks: "",
};
