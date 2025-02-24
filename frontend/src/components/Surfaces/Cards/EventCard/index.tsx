import { SFC } from "../../../../types";
import * as S from "../../../../styles";
import DefaultImg from "../../../../asset/images/default-image.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EastIcon from "@mui/icons-material/East";
import { memo } from "react";
import { truncate } from "lodash";
import { getCurrentDate } from "../../../../utils";

export interface EventCardProps {
  Id: string;
  Image: string | null;
  Title: string;
  Descritpion: string;
  ScheduleDate: string;
  Location: string;
  onClick: () => void;
}

const EventCard: SFC<EventCardProps> = ({
  Id,
  Image,
  Title,
  Descritpion,
  ScheduleDate,
  Location,
  onClick,
}) => {
  return (
    <S.Divider
      key={Id}
      className="w-full hover:shadow-md rounded-md border items-center justify-center bg-slate-50"
    >
      <S.Divider className="w-full ">
        <S.Image
          src={Image ?? DefaultImg}
          alt="event image"
          className="w-full h-[40%]"
        />
      </S.Divider>
      <S.Divider className="flex flex-col p-5">
        <S.Divider className="w-full overflow-hidden mb-2">
          <S.Span className="text-md font-medium">{Title}</S.Span>
        </S.Divider>
        <S.Divider className="w-full flex items-center justify-start  mb-2 min-h-12">
          <S.Span className="text-sm text-slate-800">
            {truncate(Descritpion, { length: 120 })}
          </S.Span>
        </S.Divider>
        <S.Divider className="w-full flex md:flex-row felx-col  items-center justify-between mb-4">
          <S.Divider className="flex items-center w-full">
            <CalendarMonthIcon className="p-[2px] text-zinc-600 " />
            <S.Span className="ml-2 text-sm ">
              {getCurrentDate(ScheduleDate)}
            </S.Span>
          </S.Divider>
          <S.Divider className="flex items-center w-full">
            <LocationOnIcon className="p-[2px] text-zinc-600 " />
            <S.Span className="ml-1 text-sm ">{Location}</S.Span>
          </S.Divider>
        </S.Divider>
        <S.Divider
          onClick={onClick}
          className="w-fit flex items-center justify-start cursor-pointer hover:font-semibold font-medium duration-300 ease-in-out"
        >
          <S.Span className="text-sm text-primary">View more</S.Span>
          <EastIcon className="ml-1 text-sm p-[2px] text-primary" />
        </S.Divider>
      </S.Divider>
    </S.Divider>
  );
};

export default memo(EventCard);
