import { AppointmentChannel } from "./appointmentChannel";
import { MealPlanRequestChannel } from "./mealPlanRequestChannel";
import { PaymentChannel } from "./paymentChannel";
import { MealPlanRatingChannel } from "./mealPlanRatingChannel";
import { UserMealPlanChannel } from "./userMealPlanChannel";

export const TransactionChannel = {
  ...MealPlanRatingChannel,
  ...AppointmentChannel,
  ...MealPlanRequestChannel,
  ...PaymentChannel,
  ...UserMealPlanChannel,
} as const;
