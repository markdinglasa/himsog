import { memo } from "react";
import { NotificationTable, SFC } from "../../../../types";
import { cn, lastDate } from "../../../../utils";
import { MoreOption } from "../../DropDown";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { AccessControl } from "../../../DataDisplay";
import API from "../../../../hooks/api";
import { useAuth } from "../../../../hooks";

interface NotificationCardProps {
  Id: string;
  Description: string;
  IsRead: boolean;
  Date: string;
  Link: string | null;
}
export const NotificationCard: SFC<NotificationCardProps> = ({
  ClassName,
  Id,
  Description,
  IsRead,
  Date,
  Link,
}) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { update } = API.Utility.Notification.Update();
  const { remove } = API.Utility.Notification.Remove();

  const data: NotificationTable = {
    UserId: auth?.user ?? 0,
    Description: Description,
    Link: Link || "",
    IsRead: true,
  };

  return (
    <div
      onClick={(e: any) => {
        e.stopPropagation();
        update(Number(Id), data);
        Link && navigate(Link);
      }}
      key={Id}
      className={cn(
        `w-full border rounded-md p-3 bg-slate-100/10 hover:bg-slate-100/60 duration-300 ease-in-out cursor-pointer ${IsRead ? "" : "font-medium"}`,
        ClassName,
      )}
    >
      <div className="w-full flex flex-row items-center justify-between ">
        <div className="top w-full flex flex-col items-start justify-between">
          <div className="w-full">
            <span className="text-sm">{Description}</span>
          </div>
          <span className="text-[12px] text-slate-600">{lastDate(Date)}</span>
        </div>

        <div className="flex flex-row gap-2 items-center justify-center h-12">
          <MoreOption
            ClassName="relative text-primary"
            DeleteOnClick={(e: any) => {
              e.stopPropagation();
              remove(Number(Id));
            }}
            MarkAsRead={(e: any) => {
              e.stopPropagation();
              update(Number(Id), data);
            }}
            IconColor={"text-primary"}
          />
          <AccessControl OtherCondition={!IsRead}>
            <FiberManualRecordIcon fontSize="small" className="text-primary" />
          </AccessControl>
        </div>
      </div>
    </div>
  );
};

export default memo(NotificationCard);
