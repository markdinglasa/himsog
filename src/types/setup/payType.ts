import { Id, Logs } from "../generic";

export interface PayTypeTable extends Id, Logs {
  UserId: number;
  Holder: string;
  MobileNumber: string;
}

export type PayTypeTables = PayTypeTable[];
export const PayTypeInitial: PayTypeTable = {
  Holder: "",
  MobileNumber: "",
  UserId: 0,
};
