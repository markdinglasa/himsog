import { Id, Logs } from "../generic";

export interface Attachment extends Id, Logs {
  ConvoId: number;
  Attachment: string;
}
export type Attachments = Attachment[];
export const AttachmentInitial: Attachment = {
  ConvoId: 0,
  Attachment: "",
};
