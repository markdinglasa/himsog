import { FeedbackChannel } from "./feedbackChannel";
import { NotificationChannel } from "./notificationChannel";
import { ReminderChannel } from "./reminderChannel";
import { UserLogChannel } from "./userLogChannel";

export const UtilityChannel = {
  ...FeedbackChannel,
  ...NotificationChannel,
  ...ReminderChannel,
  ...UserLogChannel,
} as const;
