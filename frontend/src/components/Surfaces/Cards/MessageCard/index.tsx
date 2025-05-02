import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { Tooltip } from "@mui/material";
import { MoreOption } from "../../DropDown";
import { memo } from "react";

export interface MessageCardProps {
  Id: string;
  // ConvoId: number;
  IsSender: boolean;
  Message: string;
  CurrentDate: string;
}

export const MessageCard: SFC<MessageCardProps> = ({
  Id,
  IsSender,
  Message,
  CurrentDate,
}) => {
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
              alert("Unsent Message, No Fn yet");
            }}
          />
        )}
        <Tooltip
          title={new Date(CurrentDate).toLocaleDateString()}
          placement={IsSender ? "right" : "left"}
        >
          <S.Content
            className={`w-fit text-left p-[1rem] flex flex-col rounded-xl max-w-[90%] sm:max-w-[400px]  ${IsSender ? (Message !== "Unsent a message" ? "bg-primary" : "bg-slate-200") : Message !== "Unsent a message" ? "bg-slate-100" : "bg-slate-200"}`}
          >
            <S.Span
              className={`text-md break-words ${Message !== "Unsent a message" ? "" : "text-slate-500 italic"} ${IsSender ? "text-white" : "text-slate-900"}`}
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
