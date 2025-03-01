import { BASE_URL } from "../../../shared";

export const NotificationChannel = {
  NOTIFICATION: `${BASE_URL}/transaction/notification`,
  NOTIFICATION_ID: `${BASE_URL}/transaction/notification/:Id`,
  NOTIFICATION_PARENT: `${BASE_URL}/transaction/notification/u?=:Id`,
};
