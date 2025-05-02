import { AppointmentChannel } from "./appointmentChannel";
import { MealPlanRequestChannel } from "./mealPlanRequestChannel";
import { PaymentChannel } from "./paymentChannel";
import { RequestAccessChannel } from "./requestAccessChannel";
import { MealPlanRatingChannel } from "./mealPlanRatingChannel";
import { UserMealPlanChannel } from "./userMealPlanChannel";
export const TransactionChannel = {
  ...MealPlanRatingChannel,
  ...AppointmentChannel,
  ...MealPlanRequestChannel,
  ...PaymentChannel,
  ...RequestAccessChannel,
  ...UserMealPlanChannel,
} as const;
