export enum AppointmentChannel {
  APPOINTMENT_GET = "/transaction/appointment/get/:Id",
  APPOINTMENT_GET_ALL = "/transaction/appointment/get-all/:Id", // UserId
  APPOINTMENT_NEW = "/transaction/appointment/new",
  APPOINTMENT_REMOVE = "/transaction/appointment/remove/:Id",
  APPOINTMENT_UPDATE = "/transaction/appointment/update/:Id",
}
