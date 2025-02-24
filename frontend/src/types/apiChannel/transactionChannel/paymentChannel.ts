export enum PaymentChannel {
  PAYMENT_GET = "/transaction/appointment/get/:Id",
  PAYMENT_GET_ALL = "/transaction/appointment/get-all/:Id", // UserId
  PAYMENT_NEW = "/transaction/appointment/new",
  PAYMENT_REMOVE = "/transaction/appointment/remove/:Id",
  PAYMENT_UPDATE = "/transaction/appointment/update/:Id",
}
