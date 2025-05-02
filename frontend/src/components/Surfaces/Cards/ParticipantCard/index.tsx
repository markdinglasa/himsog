import { Avatar } from "@mui/material";
import { SFC } from "../../../../types";
import { cn, lastDate, truncate } from "../../../../utils";
import { MoreOption } from "../../DropDown";
import { AccessControl } from "../../../DataDisplay";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { memo } from "react";
import API from "../../../../hooks/api";

interface ParticipantCardProps {
  Id: string;
  Photo: string | null;
  Name: string;
  LastMessage: string;
  LastMessageDate: string;
  IsRead: boolean;
  OnClick: () => void;
  ChatId?: number;
}
export const ParticipantCard: SFC<ParticipantCardProps> = ({
  ClassName,
  Photo,
  Name,
  LastMessage,
  LastMessageDate = new Date().toString(),
  IsRead = true,
  OnClick,
  Id,
  ChatId = 0,
}) => {
  const { remove } = API.Messenger.Chat.Remove();
  return (
    <div
      key={Id}
      onClick={OnClick}
      className={cn(
        "w-full flex items-center px-3 flex-row rounded-md border border-slate-300 h-14 hover:bg-slate-100 ease-in-out duration-300 cursor-pointer",
        ClassName,
      )}
    >
      <div>
        <Avatar src={Photo ? Photo : ""} />
      </div>
      <div className="w-full flex flex-col ml-3">
        <span className="text-sm font-medium">{Name}</span>
        <div className="flex flex-row gap-2">
          <span className="text-sm">{truncate(LastMessage, 50)}</span>
          <span className="text-sm">{lastDate(LastMessageDate)}</span>
        </div>
      </div>
      <div className="flex flex-row gap-1 items-center justify-center">
        <MoreOption
          IconColor="text-primary"
          DeleteOnClick={(e) => {
            e.stopPropagation();
            if (ChatId) remove(ChatId);
          }}
        />
        <AccessControl OtherCondition={!IsRead}>
          <FiberManualRecordIcon fontSize="small" className="text-primary" />
        </AccessControl>
      </div>
    </div>
  );
};

export default memo(ParticipantCard);
