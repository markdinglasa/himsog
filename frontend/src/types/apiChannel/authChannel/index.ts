import { GoogleChannel } from "./googleChannel";
import { JWTChannel } from "./jwtChannel";

export const AuthChannel = {
  ...GoogleChannel,
  ...JWTChannel,
} as const;
