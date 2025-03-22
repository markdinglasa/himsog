import { BASE_URL } from "../../../shared";

export const NotificationChannel = {
  NOTIFICATION: `${BASE_URL}/utility/notification`,
  NOTIFICATION_ID: `${BASE_URL}/utility/notification/:Id`,
  NOTIFICATION_PARENT: `${BASE_URL}/utility/notification/user/:Id`,
};
