import { AppointmentChannel } from "./appointmentChannel";
import { MealPlanRequestChannel } from "./mealPlanRequestChannel";
import { PaymentChannel } from "./paymentChannel";
import { RequestAccessChannel } from "./requestAccessChannel";
import { MealPlanRatingChannel } from "./mealPlanRatingChannel";
import { UserMealPlanChannel } from "./userMealPlanChannel";
import { UserProgressChannel } from "./userProgressChannel";

export const TransactionChannel = {
  ...MealPlanRatingChannel,
  ...AppointmentChannel,
  ...MealPlanRequestChannel,
  ...PaymentChannel,
  ...RequestAccessChannel,
  ...UserMealPlanChannel,
  ...UserProgressChannel,
} as const;
