import { Id, Logs } from "../../utils";
export interface SubscriptionLineTable extends Id, Logs {
  SubscriptionId: number; // FK to SubscriptionTable
  UserId: number; // FK to UserTable
  DateStart: string;
  DateEnd: string;
  Status?: string;
  IsCancelled: boolean;
}
export type SubscriptionLineTables = SubscriptionLineTable[];
export const SubscriptionLineInitial: SubscriptionLineTable = {
  SubscriptionId: 0,
  UserId: 0,
  DateStart: "",
  DateEnd: "",
  IsCancelled: false,
};
