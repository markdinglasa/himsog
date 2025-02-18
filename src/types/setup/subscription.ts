import { Id, Logs } from "../generic";

export interface SubscriptionTable extends Id, Logs {
  Name: string;
  Description: string;
  Duration: number; // Number of Days
  Price: number;
}
export type SubscriptionTables = SubscriptionTable[];
export const SubscriptionInitial: SubscriptionTable = {
  Name: "",
  Description: "",
  Duration: 0,
  Price: 0,
};
