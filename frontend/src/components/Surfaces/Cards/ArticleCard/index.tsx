import { SFC } from "../../../../types";
import * as S from "../../../../styles";
import DefaultImg from "../../../../asset/images/default-image.jpg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { memo } from "react";
import { truncate } from "lodash";
import { getCurrentDate } from "../../../../utils";

export interface ArticleCardProps {
  Id: string;
  Image: string | null;
  Title: string;
  Descritpion: string;
  ScheduleDate: string;
  onClick: () => void;
}

const ArticleCard: SFC<ArticleCardProps> = ({
  Id,
  Image,
  Title,
  Descritpion,
  ScheduleDate,
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
          alt="Article image"
          className="w-full h-[40%]"
        />
      </S.Divider>
      <S.Divider className="flex flex-col p-5">
        <S.Divider className="w-full overflow-hidden mb-2 flex flex-col">
          <S.Span className="text-md font-medium">{Title}</S.Span>
          <S.Divider className="flex items-center w-full">
            <S.Span className="text-sm ">{getCurrentDate(ScheduleDate)}</S.Span>
          </S.Divider>
        </S.Divider>
        <S.Divider className="w-full flex items-center justify-start  mb-2 min-h-12">
          <S.Span className="text-sm text-slate-800 text-justify">
            {truncate(Descritpion, { length: 200 })}
          </S.Span>
        </S.Divider>
        <S.Divider
          onClick={onClick}
          className="w-fit flex items-center justify-start cursor-pointer hover:font-semibold font-medium duration-300 ease-in-out"
        >
          <S.Span className="text-sm text-primary">Read article</S.Span>
          <ArrowOutwardIcon className="ml-1 text-sm p-[2px] text-primary" />
        </S.Divider>
      </S.Divider>
    </S.Divider>
  );
};

export default memo(ArticleCard);
