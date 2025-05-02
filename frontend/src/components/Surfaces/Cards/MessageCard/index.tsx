import { Message, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { Tooltip } from "@mui/material";
import { MoreOption } from "../../DropDown";
import { memo } from "react";
import API from "../../../../hooks/api";

export interface MessageCardProps {
  Id: string;
  ChatId: number;
  SenderId: number;
  IsSender: boolean;
  Message: string;
  CurrentDate: string;
}

export const MessageCard: SFC<MessageCardProps> = ({
  Id,
  IsSender,
  Message,
  CurrentDate,
  ChatId,
  SenderId,
}) => {
  const { update } = API.Messenger.Message.Update();
  return (
    <>
      <S.Container
        key={Id}
        className={`w-full flex items-center gap-2 ${IsSender ? "justify-end" : "justify-start"} my-2`}
      >
        {Message !== "Unsent a message" && IsSender && (
          <MoreOption
            IconColor="text-primary"
            UnsentMessage={() => {
              const UnsentMessage: Message = {
                ChatId: ChatId,
                SenderId: SenderId,
                Contents: "Unsent a message",
                IsRead: false,
              };

              update(Number(Id), UnsentMessage);
            }}
          />
        )}
        <Tooltip
          title={new Date(CurrentDate).toLocaleDateString()}
          placement={IsSender ? "right" : "left"}
        >
          <S.Content
            className={`w-fit text-left p-[1rem] flex flex-col rounded-xl max-w-[90%] sm:max-w-[400px]  ${IsSender ? (Message !== "Unsent a message" ? "bg-primary" : "bg-slate-500/60") : Message !== "Unsent a message" ? "bg-slate-100" : "bg-slate-200"}`}
          >
            <S.Span
              className={`text-md break-words ${Message !== "Unsent a message" ? "" : "text-slate-900 italic"} ${IsSender ? "text-white" : "text-slate-900"}`}
            >
              {Message}
            </S.Span>
          </S.Content>
        </Tooltip>
      </S.Container>
    </>
  );
};

export default memo(MessageCard);
