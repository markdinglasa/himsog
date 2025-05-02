import { Id, Logs } from "../generic";

export interface ReminderTable extends Id, Logs {
  UserId: number; // FK to UserTable
  Description: string | null;
  Alarm: string;
}
export type ReminderTables = ReminderTable[];
export const ReminderInital: ReminderTable = {
  UserId: 0,
  Description: null,
  Alarm: "",
};
