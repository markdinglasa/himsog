import { AuthChannel } from "./authChannel";
import { SetupChannel } from "./setupChannel";
import { TransactionChannel } from "./transactionChannel";
import { UtilityChannel } from "./utilityChannel";

export const APIChannel = {
  ...TransactionChannel,
  ...UtilityChannel,
  ...SetupChannel,
  ...AuthChannel,
} as const;

export type APIChannelType = (typeof APIChannel)[keyof typeof APIChannel];
