export enum NotificationChannel {
  NOTIFICATION_GET = "/utility/notification/get/:Id",
  NOTIFICATION_GET_ALL = "/utility/notification/get-all/:UserId",
  NOTIFICATION_NEW = "/utility/notification/new",
  NOTIFICATION_REMOVE = "/utility/notification/remove/:Id",
  NOTIFICATION_UPDATE = "/utility/notification/update/:Id",

  NOTIFICATION = "/utility/notification",
  NOTIFICATION_ID = "/utility/notification/:Id",
  NOTIFICATION_PARENT = "/utility/notification/u?=:Id",
}
