import { FeedbackChannel } from "./feedbackChannel";
import { NotificationChannel } from "./notificationChannel";
import { ReminderChannel } from "./reminderChannel";
import { UserLogChannel } from "./userLogChannel";
import { CountChannel } from "./countChannel";

export const UtilityChannel = {
  ...FeedbackChannel,
  ...NotificationChannel,
  ...ReminderChannel,
  ...UserLogChannel,
  ...CountChannel,
} as const;
