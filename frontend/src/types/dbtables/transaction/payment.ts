import { Currency, Id, Logs } from "../../utils";
export enum PaymentStatus {
  DEFAULT = "",
  PAID = "paid",
  PENDING = "pending",
  INVALID = "invalid",
  EXPIRED = "expired",
}

interface SubscriptionData {
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
interface MealPlanData {
  Remark: string | null;
  Image: string | null;
  Status: boolean;
}
export interface PaymentTable extends Id, Logs {
  TransactionDate: string;
  TransactionId: string;
  UserId: number;
  SubscriptionId: number | null; // FK to SubscriptionTable
  MealPlanId: number | null;
  Currency: Currency; //  PHP as default
  Amount: number;
  Method: string;
  IsSubscription: boolean;
  IsMealPlan: boolean;
  SubscriptionData: SubscriptionData | null;
  MealPlanData: MealPlanData | null;
}
export type PaymentTables = PaymentTable[];
export const PaymentInitial: PaymentTable = {
  TransactionDate: "",
  TransactionId: "",
  UserId: 0,
  SubscriptionId: 0,
  Currency: Currency.PHP,
  Amount: 0,
  Method: "",
  MealPlanId: null,
  IsSubscription: false,
  IsMealPlan: false,
  SubscriptionData: null,
  MealPlanData: null,
};
