import { FeedbackChannel } from "./feedbackChannel";
import { NotificationChannel } from "./notificationChannel";
import { ReminderChannel } from "./reminderChannel";
import { UserLogChannel } from "./userLogChannel";
import { UploadChannel } from "./uploadChannel";
export const UtilityChannel = {
  ...FeedbackChannel,
  ...NotificationChannel,
  ...ReminderChannel,
  ...UserLogChannel,
  ...UploadChannel,
} as const;
