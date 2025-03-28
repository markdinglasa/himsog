import { EventInitial, EventTable, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { cn, getCurrentDate, getCurrentTime } from "../../../utils";
import { AccessControl } from "..";
import Icon from "../../../constants/icon";
import { memo } from "react";
import { Skeleton } from "../../Feedback";

interface EventDetailsProps {
  Data: EventTable;
  Loading: boolean;
}
export const EventDetails: SFC<EventDetailsProps> = ({
  ClassName,
  Data = EventInitial,
  Loading = false,
}) => {
  if (Loading) return <Skeleton />;
  return (
    <S.Container className={cn("w-full", ClassName)}>
      <S.Divider className="w-full">
        <AccessControl OtherCondition={(Data?.Remarks ?? "").length > 0}>
          <S.Divider className="w-full overflow-hidden bg-blue-100 border-blue-400 p-[1rem] rounded-md border mb-[1rem] flex flex-col">
            <S.Span className="text-md font-medium">Remarks</S.Span>
            <S.Span className="text-sm ">{Data?.Remarks}</S.Span>
          </S.Divider>
        </AccessControl>
        <S.Divider className="w-full flex flex-col">
          <S.Divider className="w-full overflow-hidden ">
            <S.Span className="text-2xl font-medium">{Data?.Title}</S.Span>
          </S.Divider>
          <S.Divider className="w-full flex flex-row items-center gap-[1rem] justify-start ">
            <S.Divider className="flex items-center w-fit">
              <Icon.Calendar className="p-[2px] text-slate-400 " />
              <S.Span className="ml-2 text-sm text-slate-600">
                {getCurrentDate(Data?.ScheduleDate)}
              </S.Span>
            </S.Divider>
            <S.Divider className="flex items-center w-fit">
              <Icon.Time className="p-[2px] text-slate-400 " />
              <S.Span className="ml-2 text-sm text-slate-600">
                {getCurrentTime(Data?.TimeStart)} -
              </S.Span>
              <S.Span className="ml-2 text-sm text-slate-600">
                {getCurrentTime(Data?.TimeEnd)}
              </S.Span>
            </S.Divider>
          </S.Divider>
          <S.Divider className="flex items-center w-fit py-2">
            <Icon.Location className="p-[2px] text-slate-400 " />
            <S.Span className="ml-2 text-sm text-slate-600">
              {Data?.Location}
            </S.Span>
          </S.Divider>

          <AccessControl
            OtherCondition={
              !!(Data?.RegistrationLink && Data?.RegistrationLink?.length > 0)
            }
          >
            <S.Divider className="w-full flex items-center flex-row justify-start py-5">
              <S.Span className="text-sm text-slate-600">
                Click here to register:
              </S.Span>
              <a
                className="text-sm text-blue-400 ml-3"
                href={Data?.RegistrationLink ?? ""}
                target="_blank"
              >
                {Data?.RegistrationLink ?? ""}
              </a>
            </S.Divider>
          </AccessControl>
          <S.Divider className="w-full py-5">
            <p className="text-md font-medium">About this event</p>
            <p className="text-slate-600 text-sm text-justify">
              {Data?.Description ?? "No Description"}
            </p>
          </S.Divider>
        </S.Divider>
        <AccessControl
          OtherCondition={!!(Data?.Image && Data?.Image?.length > 0)}
        >
          <S.Divider className="w-full border-t py-[1rem]">
            <S.Image
              src={Data?.Image ?? ""}
              alt={Data?.Title ?? ""}
              className="w-full"
            />
          </S.Divider>
        </AccessControl>
      </S.Divider>
    </S.Container>
  );
};

export default memo(EventDetails);
