export enum PaymentChannel {
  PAYMENT_GET = "/transaction/appointment/get/:Id",
  PAYMENT_GET_ALL = "/transaction/appointment/get-all/:Id", // UserId
  PAYMENT_NEW = "/transaction/appointment/new",
  PAYMENT_REMOVE = "/transaction/appointment/remove/:Id",
  PAYMENT_UPDATE = "/transaction/appointment/update/:Id",

  PAYMENT = "/transaction/payment",
  PAYMENT_ID = "/transaction/payment/:Id",
  PAYMENT_USER = "/transaction/payment/u?=:Id",
}
