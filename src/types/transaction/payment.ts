import { Currency } from "../curreny";
import { Id, Logs } from "../generic";
export enum PaymentStatus {
  DEFAULT = "",
  PAID = "paid",
  PENDING = "pending",
  INVALID = "invalid",
  EXPIRED = "expired",
}

export interface PaymentTable extends Id, Logs {
  TransactionDate: string;
  TransactionId: string;
  UserId: number;
  SubscriptionId: number; // FK to SubscriptionTable
  Curreny: Currency; //  PHP as default
  Amount: number;
  Method: string;
  Token: string;
  BillingAddress: string | null;
  City: string;
  ZIPCode: number;
  Country: string;
  Holder: string;
  CVCNumber: number;
  ExpiryMonth: string;
  ExpiryYear: string;
  CardNumber: string;
  Status: PaymentStatus;
}
export type PaymentTables = PaymentTable[];
export const PaymentInitial: PaymentTable = {
  TransactionDate: "",
  TransactionId: "",
  UserId: 0,
  SubscriptionId: 0,
  Curreny: Currency.PHP,
  Amount: 0,
  Method: "",
  Token: "",
  BillingAddress: null,
  Status: PaymentStatus.DEFAULT,
  City: "",
  ZIPCode: 0,
  Country: "",
  Holder: "",
  CVCNumber: 0,
  ExpiryMonth: "",
  ExpiryYear: "",
  CardNumber: "",
};
