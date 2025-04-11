import { EventTable, SFC } from "../../../../types";
import * as S from "../../../../styles";
import Icon from "../../../../constants/icon";
import { memo } from "react";
import { truncate } from "lodash";
import { getCurrentDate, getCurrentTime } from "../../../../utils";
import { AccessControl } from "../../../DataDisplay";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../modals";
import EventDetails from "../../../DataDisplay/EventDetails";

export interface EventCardProps {
  Data: EventTable;
  //onClick: () => void;
  IsLoading: boolean;
  IsWidget?: boolean;
}

const EventCard: SFC<EventCardProps> = ({
  ClassName,
  Data,
  //onClick,
  IsWidget = false,
  IsLoading = true,
}) => {
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <div>
      <S.Divider
        key={Data?.Id}
        onClick={toggleDisplay}
        className={`${ClassName} w-full cursor-pointer  ${IsWidget ? "flex flex-row overflow-hidden" : "bg-slate-50 border"} hover:shadow-md rounded-md  items-center justify-center `}
      >
        <AccessControl
          OtherCondition={!!(Data?.Image && Data?.Image?.length > 0)}
        >
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
              <Icon.Calendar className="p-[2px] text-slate-400 " />
              <S.Span className="ml-2 text-sm text-slate-600">
                {getCurrentDate(Data?.ScheduleDate)}
              </S.Span>
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full flex flex-col items-start justify-start py-[1rem]">
            <S.Divider className="flex items-center w-fit">
              <Icon.Time className="p-[2px] text-slate-400 " />
              <S.Span className="ml-2 text-sm text-slate-600">
                {getCurrentTime(Data?.TimeStart)} {" - "}
              </S.Span>
              <S.Span className="ml-2 text-sm text-slate-600">
                {getCurrentTime(Data?.TimeEnd)}
              </S.Span>
            </S.Divider>
            <S.Divider className="flex items-center w-fit">
              <Icon.Location className="p-[2px] text-slate-400 " />
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
        </S.Divider>
        <S.Divider className="w-full h-12 border-t">
          {/*POSTED BY HERE*/}
        </S.Divider>
      </S.Divider>
      <CustomModal
        close={toggleDisplay}
        title="Health & Nutrition Event Details"
        open={isDisplay}
        ClassName="w-full md:w-[50rem] h-[90vh] overflow-auto"
      >
        <EventDetails Data={Data} Loading={IsLoading} />
      </CustomModal>
    </div>
  );
};

export default memo(EventCard);
