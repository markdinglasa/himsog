import { Roles, RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles";
import DefaultImg from "../../../../asset/images/default-image.jpg";
import Icon from "../../../../constants/icon";
import { memo } from "react";
import { truncate } from "lodash";
import { getCurrentDate, getCurrentTime, renderPath } from "../../../../utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks";
import { AccessControl } from "../../../DataDisplay";

export interface EventCardProps {
  Id: string;
  Image: string | null;
  Title: string;
  Descritpion: string;
  ScheduleDate: string;
  Location: string;
  //onClick: () => void;
  IsWidget?: boolean;
}

const EventCard: SFC<EventCardProps> = ({
  ClassName,
  Id,
  Image,
  Title,
  Descritpion,
  ScheduleDate,
  Location,
  //onClick,
  IsWidget = false,
}) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const path = renderPath(auth?.roles as Roles);
  return (
    <S.Divider
      key={Id}
      onClick={() =>
        IsWidget &&
        navigate(
          `${RouteChannel.EVENT_DETIALS.slice(0, RouteChannel.EVENT_DETIALS.length - 3)}${Id}`,
        )
      }
      className={`${ClassName} w-full  ${IsWidget ? "flex flex-row overflow-hidden" : "bg-slate-50 border"} hover:shadow-md rounded-md  items-center justify-center `}
    >
      <AccessControl OtherCondition={!!(Image && Image?.length > 0)}>
        <S.Divider className="w-full overflow-hidden">
          <S.Image
            src={Image ?? DefaultImg}
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
            <S.Span className="text-lg font-medium">{Title}</S.Span>
          </S.Divider>
          <S.Divider className="flex items-center w-fit">
            <Icon.Calendar className="p-[2px] text-slate-600 " />
            <S.Span className="ml-2 text-sm text-slate-600">
              {getCurrentDate(ScheduleDate)}
            </S.Span>
          </S.Divider>
        </S.Divider>
        <S.Divider className="w-full flex flex-col items-start justify-start py-[1rem]">
          <S.Divider className="flex items-center w-fit">
            <Icon.Time className="p-[2px] text-slate-600 " />
            <S.Span className="ml-2 text-sm text-slate-600">
              {getCurrentTime(ScheduleDate)}
            </S.Span>
          </S.Divider>
          <S.Divider className="flex items-center w-fit">
            <Icon.Location className="p-[2px] text-slate-600 " />
            <S.Span className="ml-2 text-sm text-slate-600">{Location}</S.Span>
          </S.Divider>
        </S.Divider>
        <S.Divider className="w-full flex items-center justify-start min-h-12">
          <S.Span className="text-sm text-slate-800">
            {truncate(Descritpion, { length: 90 })}
          </S.Span>
        </S.Divider>
        {!IsWidget && (
          <S.Divider
            onClick={() => navigate(`${path}/event/d/${Id}`)}
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
