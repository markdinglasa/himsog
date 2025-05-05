import { AppointmentChannel } from "./appointmentChannel";
import { MealPlanRequestChannel } from "./mealPlanRequestChannel";
import { PaymentChannel } from "./paymentChannel";
import { MealPlanRatingChannel } from "./mealPlanRatingChannel";
import { UserMealPlanChannel } from "./userMealPlanChannel";
import { UserProgressChannel } from "./userProgressChannel";

export const TransactionChannel = {
  ...MealPlanRatingChannel,
  ...AppointmentChannel,
  ...MealPlanRequestChannel,
  ...PaymentChannel,
  ...UserMealPlanChannel,
  ...UserProgressChannel,
} as const;
