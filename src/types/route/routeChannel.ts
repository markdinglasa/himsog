import { AuthChannel } from "./authChannel";
import { SetupChannel } from "./setupChannel";
import { TransactionChannel } from "./transactionChannel";
import { UtilityChannel } from "./utilityChannel";
import { MessengerChannel } from "./messengerChannel";

export const RouteChannel = {
  ...TransactionChannel,
  ...UtilityChannel,
  ...SetupChannel,
  ...AuthChannel,
  ...MessengerChannel,
} as const;

export type RouteChannelType = (typeof RouteChannel)[keyof typeof RouteChannel];
