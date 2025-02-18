import { AppointmentChannel } from "./appointmentChannel";
import { MealPlanRequestChannel } from "./mealPlanRequestChannel";
import { PaymentChannel } from "./paymentChannel";

export const TransactionChannel = {
  ...AppointmentChannel,
  ...MealPlanRequestChannel,
  ...PaymentChannel,
} as const;
