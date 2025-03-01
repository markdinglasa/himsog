export enum SubscriptionLineChannel {
  SUBSCRIPTION_LINE_GET = "/setup/subscription/get/:Id",
  SUBSCRIPTION_LINE_GET_ALL = "/setup/subscription/get-all/:Id", // SubscriptionId
  SUBSCRIPTION_LINE_NEW = "/setup/subscription/new",
  SUBSCRIPTION_LINE_REMOVE = "/setup/subscription/remove/:Id",
  SUBSCRIPTION_LINE_UPDATE = "/setup/subscription/update/:Id",

  SUBSCRIPTION_LINE = "/setup/subscription-line",
  SUBSCRIPTION_LINE_ID = "/setup/subscription-line/:Id",
  SUBSCRIPTION_LINE_PARENT = "/setup/subscription-line/subscription?=:Id",
}
