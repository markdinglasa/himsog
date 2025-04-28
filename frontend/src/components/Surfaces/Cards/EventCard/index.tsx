import { EventTable, RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles";
import Icon from "../../../../constants/icon";
import { memo } from "react";
import { truncate } from "lodash";
import { getCurrentDate, getCurrentTime } from "../../../../utils";
import { AccessControl } from "../../../DataDisplay";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../modals";
import EventDetails from "../../../DataDisplay/EventDetails";
import { MoreOption } from "../../DropDown";
import { useNavigate } from "react-router-dom";
import API from "../../../../hooks/api";
import { useAuth } from "../../../../hooks";
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
  const navigate = useNavigate();
  const { remove } = API.Setup.Event.Remove();
  const [isDisplay, toggleDisplay] = useToggle(false);
  const { auth } = useAuth();
  return (
    <div>
      <S.Divider
        key={Data?.Id}
        onClick={toggleDisplay}
        className={`${ClassName} w-full cursor-pointer  ${IsWidget ? "flex flex-row overflow-hidden" : "bg-slate-50 border"} hover:shadow-md rounded-md  items-center justify-center `}
      >
        <S.Divider className="relative w-full">
          <AccessControl OtherCondition={!!Data?.Image}>
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
          <AccessControl
            OtherCondition={Number(auth?.user) === Number(Data.CreatedBy)}
          >
            <div className="absolute z-10 top-2 right-2">
              <MoreOption
                IconColor="text-primary"
                DeleteOnClick={(e: any) => {
                  e.stopPropagation();
                  remove(Number(Data.Id));
                }}
                EditOnClick={(e: any) => {
                  e.stopPropagation();
                  Data?.Id &&
                    navigate(
                      RouteChannel.NUTRITIONIST_EVENT_DETAILS.replace(
                        ":Id",
                        Data.Id.toString(),
                      ),
                    );
                }}
              />
            </div>
          </AccessControl>
        </S.Divider>
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
