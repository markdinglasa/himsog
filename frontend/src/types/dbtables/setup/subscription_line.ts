import { Id, Logs } from "../../utils";
export interface SubscriptionLineTable extends Id, Logs {
  SubscriptionId: number; // FK to SubscriptionTable
  UserId: number; // FK to UserTable
  UserName?: string;
  DateStart: string;
  DateEnd: string;
  SubscriptionStatus?: string;
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
