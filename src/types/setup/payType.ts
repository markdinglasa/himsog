import { Id, Logs } from "../generic";

export interface PayTypeTable extends Id, Logs {
  UserId: number;
  Name: string;
  Holder: string;
  MobileNumber: string;
  Image: string | null;
}

export type PayTypeTables = PayTypeTable[];
export const PayTypeInitial: PayTypeTable = {
  Holder: "",
  Name: "",
  MobileNumber: "",
  UserId: 0,
  Image: null,
};
