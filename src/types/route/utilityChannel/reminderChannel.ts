export enum ReminderChannel {
  REMINDER_GET = "/utility/reminder/get/:Id",
  REMINDER_GET_ALL = "/utility/reminder/get-all/:UserId",
  REMINDER_NEW = "/utility/reminder/new",
  REMINDER_REMOVE = "/utility/reminder/remove/:Id",
  REMINDER_UPDATE = "/utility/reminder/update/:Id",

  REMINDER = "/utility/reminder",
  REMINDER_ID = "/utility/reminder/:Id",
  REMINDER_PARENT = "/utility/reminder/u?=:Id",
}
