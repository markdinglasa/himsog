export enum Channels {
  AUTH = "/auth",
  SETUP = "/setup",
  TRANSACTION = "/transaction",
  UTILITY = "/utility",
  SETTINGS = "/settings",
  REPORT = "/report",
  LOCK = "/lock/:Id",
  CANCEL = "/cancel/:Id",

  LOGIN = "/login",
  LOGOUT = "/logout",
  REFRESH = "/refresh",

  GET_RECORD = "/get/:Id",
  GET_BY_NAME_RECORD = "/get-by-name/:Name",
  GET_ALL_RECORD = "/get-all",
  GET_ALL_RECORD_WITH_ID = "/get-all/:Id",
  REMOVE_RECORD = "/remove/:Id",
  UPDATE_RECORD = "/update/:Id",
  ADD_RECORD = "/add",
}
