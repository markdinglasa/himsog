import { AuthChannel } from "./authChannel";
import { SetupChannel } from "./setupChannel";
import { TransactionChannel } from "./transactionChannel";
import { UtilityChannel } from "./utilityChannel";
import { MessengerChannel } from "./messengerChannel";

export const APIChannel = {
  ...TransactionChannel,
  ...UtilityChannel,
  ...SetupChannel,
  ...AuthChannel,
  ...MessengerChannel,
} as const;

export type APIChannelType = (typeof APIChannel)[keyof typeof APIChannel];
