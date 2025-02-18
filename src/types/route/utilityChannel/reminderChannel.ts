export enum ReminderChannel {
  REMINDER_GET = "/transaction/reminder/get/:Id",
  REMINDER_GET_ALL = "/transaction/reminder/get-all/:UserId",
  REMINDER_NEW = "/transaction/reminder/new",
  REMINDER_REMOVE = "/transaction/reminder/remove/:Id",
  REMINDER_UPDATE = "/transaction/reminder/update/:Id",
}
