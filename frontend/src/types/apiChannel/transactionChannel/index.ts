import { AppointmentChannel } from "./appointmentChannel";
import { MealPlanRequestChannel } from "./mealPlanRequestChannel";
import { PaymentChannel } from "./paymentChannel";
import { RequestAccessChannel } from "./requestAccessChannel";

export const TransactionChannel = {
  ...AppointmentChannel,
  ...MealPlanRequestChannel,
  ...PaymentChannel,
  ...RequestAccessChannel,
} as const;
