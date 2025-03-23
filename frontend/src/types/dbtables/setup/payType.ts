import { Id, Logs } from "../../utils";
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
