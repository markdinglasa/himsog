import { Id, Logs } from "../../utils";
export interface PayTypeTable extends Id, Logs {
  UserId: number;
  Name: string;
  Holder: string;
  MobileNumber: string;
}
export type PayTypeTables = PayTypeTable[];
export const PayTypeInitial: PayTypeTable = {
  Holder: "",
  MobileNumber: "",
  UserId: 0,
  Name: "",
};
