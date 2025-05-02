import { BASE_URL } from "../../../shared";

export const PaymentChannel = {
  PAYMENT: `${BASE_URL}/transaction/payment`,
  PAYMENT_ID: `${BASE_URL}/transaction/payment/:Id`,
  PAYMENT_PARENT: `${BASE_URL}/transaction/payment/u/:Id`,
  PAYMENT_MEAL_PLAN: `${BASE_URL}/transaction/payment/mp/:Id`, // UserId of the Health Professional
};
