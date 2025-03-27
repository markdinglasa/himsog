export enum NotificationChannel {
  NOTIFICATION = "/utility/notification",
  NOTIFICATION_ID = "/utility/notification/:Id",
  NOTIFICATION_PARENT = "/utility/notification/user/:Id",
  NOTIFICATION_HAS_NOTIFICATION = "/utility/notification/is-notified/user/:Id",
}
