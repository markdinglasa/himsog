import { Id, Logs } from "../generic";

export interface HealthConditionTable extends Id, Logs {
  HealthId: number;
  Category: string;
  Description: string;
}
export type HealthConditionTables = HealthConditionTable[];
export const HealthConditionInitial: HealthConditionTable = {
  HealthId: 0,
  Category: "",
  Description: "",
};
