export enum SubscriptionLineChannel {
  SUBSCRIPTION_LINE_GET = "/setup/subscription/get/:Id",
  SUBSCRIPTION_LINE_GET_ALL = "/setup/subscription/get-all/:Id", // SubscriptionId
  SUBSCRIPTION_LINE_NEW = "/setup/subscription/new",
  SUBSCRIPTION_LINE_REMOVE = "/setup/subscription/remove/:Id",
  SUBSCRIPTION_LINE_UPDATE = "/setup/subscription/update/:Id",
}
