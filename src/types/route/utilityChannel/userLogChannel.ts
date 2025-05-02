export enum UserLogChannel {
  USER_LOG_GET = "/utility/user-log/get/:Id",
  USER_LOG_GET_ALL = "/utility/user-log/get-all",
  USER_LOG_NEW = "/utility/user-log/new",
  USER_LOG_REMOVE = "/utility/user-log/remove/:Id",
  USER_LOG_UPDATE = "/utility/user-log/update/:Id",

  USER_LOG = "/utility/user-log",
  USER_LOG_ID = "/utility/user-log/:Id",
  USER_LOG_PARENT = "/utility/user-log/u?=:Id",
}
