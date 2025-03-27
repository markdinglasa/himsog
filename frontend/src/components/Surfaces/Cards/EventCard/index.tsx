import { EventTable, Roles, SFC } from "../../../../types";
import * as S from "../../../../styles";
import Icon from "../../../../constants/icon";
import { memo } from "react";
import { truncate } from "lodash";
import { getCurrentDate, getCurrentTime, renderPath } from "../../../../utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks";
import { AccessControl } from "../../../DataDisplay";

export interface EventCardProps {
  Data: EventTable;
  //onClick: () => void;
  IsWidget?: boolean;
}

const EventCard: SFC<EventCardProps> = ({
  ClassName,
  Data,
  //onClick,
  IsWidget = false,
}) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const path = renderPath(auth?.roles as Roles);
  return (
    <S.Divider
      key={Data?.Id}
      onClick={() =>
        IsWidget &&
        (auth?.roles
          ? navigate(`${path}/event/d/${Data?.Id}`)
          : navigate(`/event/d/${Data?.Id}`))
      }
      className={`${ClassName} w-full  ${IsWidget ? "flex flex-row overflow-hidden" : "bg-slate-50 border"} hover:shadow-md rounded-md  items-center justify-center `}
    >
      <AccessControl OtherCondition={!!(Image && Image?.length > 0)}>
        <S.Divider className="w-full overflow-hidden">
          <S.Image
            src={Data?.Image ?? ""}
            alt="event image"
            className={
              IsWidget ? "h-full w-full overflow-hidden" : "w-full h-[40%]"
            }
          />
        </S.Divider>
      </AccessControl>

      <S.Divider className="flex flex-col p-5">
        <S.Divider className="py-2">
          <S.Divider className="w-full overflow-hidden ">
            <S.Span className="text-2xl font-medium">{Data?.Title}</S.Span>
          </S.Divider>
          <S.Divider className="flex items-center w-fit">
            <Icon.Calendar className="p-[2px] text-slate-600 " />
            <S.Span className="ml-2 text-sm text-slate-600">
              {getCurrentDate(Data?.ScheduleDate)}
            </S.Span>
          </S.Divider>
        </S.Divider>
        <S.Divider className="w-full flex flex-col items-start justify-start py-[1rem]">
          <S.Divider className="flex items-center w-fit">
            <Icon.Time className="p-[2px] text-slate-600 " />
            <S.Span className="ml-2 text-sm text-slate-600">
              {getCurrentTime(Data?.TimeStart)}
            </S.Span>
          </S.Divider>
          <S.Divider className="flex items-center w-fit">
            <Icon.Location className="p-[2px] text-slate-600 " />
            <S.Span className="ml-2 text-sm text-slate-600">
              {Data?.Location}
            </S.Span>
          </S.Divider>
        </S.Divider>
        <S.Divider className="w-full flex items-center justify-start min-h-12">
          <S.Span className="text-sm text-slate-800">
            {truncate(Data?.Description, { length: 90 })}
          </S.Span>
        </S.Divider>
        {!IsWidget && (
          <S.Divider
            onClick={() =>
              auth?.roles
                ? navigate(`${path}/event/d/${Data?.Id}`)
                : navigate(`/event/d/${Data?.Id}`)
            }
            className="w-fit flex items-center justify-start cursor-pointer hover:font-semibold font-medium duration-300 ease-in-out"
          >
            <S.Span className="text-sm text-primary">View more</S.Span>
            <Icon.East className="ml-1 text-sm p-[2px] text-primary" />
          </S.Divider>
        )}
      </S.Divider>
    </S.Divider>
  );
};

export default memo(EventCard);
