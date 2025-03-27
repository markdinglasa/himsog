import { EventInitial, EventTable, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { cn, getCurrentDate, truncate } from "../../../utils";
import { AccessControl } from "..";
import Icon from "../../../constants/icon";
import Card from "../../Surfaces/Cards";
import { memo } from "react";

interface EventDetailsProps {
  Data: EventTable;
}
export const EventDetails: SFC<EventDetailsProps> = ({ ClassName, Data }) => {
  return (
    <S.Container className={cn("w-full", ClassName)}>
      <S.Content className="h-full flex flex-col justify-center items-center w-full md:w-11/12 mt-10 ">
        <AccessControl OtherCondition={!!(Image && Image?.length > 0)}>
          <S.Divider className="w-full">
            <S.Image src={Data?.Image ?? ""} className="w-full h-[30rem]" />
          </S.Divider>
        </AccessControl>
        <S.Divider className="w-full  flex flex-col">
          <S.Divider className="py-2">
            <S.Span className="text-xl font-semibold">
              {truncate(Data?.Title ?? "NA", 100)}
            </S.Span>
          </S.Divider>
          <S.Divider className="w-full flex md:flex-row felx-col  items-center justify-start mb-4">
            <S.Divider className="flex flex-row items-center w-fit">
              <S.Divider>
                <Icon.Calendar className="p-[2px] text-zinc-600 " />
                <S.Span className="ml-2 text-sm ">
                  {getCurrentDate(Data?.ScheduleDate)}
                </S.Span>
              </S.Divider>
            </S.Divider>
            <S.Divider className="flex items-center w-fit ml-3">
              <Icon.Location className="p-[2px] text-zinc-600 " />
              <S.Span className="ml-1 text-sm ">{Data?.Location}</S.Span>
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full flex md:flex-row felx-col  items-center justify-start mb-2">
            <S.Span className="text-sm text-slate-600">
              Click here to view more:{" "}
              <S.Span className="text-blue-600">event link here</S.Span>
            </S.Span>
          </S.Divider>
          <S.Divider className="flex md:flex-row flex-col gap-10">
            <S.Divider className="w-full md:w-8/12 flex md:flex-row flex-col  items-start justify-start mb-2">
              <S.P className="text-slate-600 text-justify">
                {Data?.Description}
              </S.P>
            </S.Divider>
            <S.Divider className="w-full md:w-4/12 flex flex-col  items-center justify-start">
              <S.Divider className="flex items-start justify-start w-full py-2">
                <S.Span className="text-lg font-medium">Upcoming events</S.Span>
              </S.Divider>
              <S.Divider className="">
                <Card.Event
                  ClassName="h-[10rem] cursor-pointer mb-2"
                  Data={EventInitial}
                  IsWidget={true}
                />
              </S.Divider>
              <S.Divider className="flex items-center justify-start w-full mt-4">
                <S.Span
                  className="font-medium text-md cursor-pointer"
                  onClick={() => {
                    alert("fetch more upcoming-vents");
                  }}
                >
                  Show more...
                </S.Span>
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Divider>
      </S.Content>
    </S.Container>
  );
};

export default memo(EventDetails);
