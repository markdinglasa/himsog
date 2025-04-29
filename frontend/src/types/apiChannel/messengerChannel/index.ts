import { AttachmentChannel } from "./attachmentChannel";
import { ChatChannel } from "./chatChannel";
import { ConvoChannel } from "./convoChannel";
import { MessageChannel } from "./messageChannel";

export const MessengerChannel = {
  ...AttachmentChannel,
  ...ChatChannel,
  ...ConvoChannel,
  ...MessageChannel,
};
