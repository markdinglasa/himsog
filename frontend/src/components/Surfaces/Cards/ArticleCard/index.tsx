import { ArticleTable, RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles";
import DefaultImg from "../../../../asset/images/default-image.jpg";
import Icon from "../../../../constants/icon";
import { memo } from "react";
import { truncate } from "lodash";
import { getCurrentDate } from "../../../../utils";
import { useNavigate } from "react-router-dom";

export interface ArticleCardProps {
  Data: ArticleTable;
  //onClick: () => void;
  IsWidget?: boolean;
}

const ArticleCard: SFC<ArticleCardProps> = ({
  ClassName,
  Data,
  IsWidget = false,
}) => {
  const navigate = useNavigate();
  return (
    <S.Divider
      key={Data.Id}
      onClick={() =>
        IsWidget &&
        navigate(
          `${RouteChannel.ARTICLE_DETAILS.slice(0, RouteChannel.ARTICLE_DETAILS.length - 3)}${Data.Id}`,
        )
      }
      className={`${IsWidget ? "flex flex-row" : "border bg-slate-50"} w-full hover:shadow-md rounded-md  items-center justify-center  ${ClassName}`}
    >
      <S.Divider className="w-full ">
        <S.Image
          src={Data.Image ?? DefaultImg}
          alt="Article image"
          className="w-full h-[40%]"
        />
      </S.Divider>
      <S.Divider className="flex flex-col p-5">
        <S.Divider className="w-full overflow-hidden mb-2 flex flex-col">
          <S.Span className="text-md font-medium">{Data.Title}</S.Span>
          <S.Divider className="flex items-center w-full">
            <S.Span className="text-sm ">
              {getCurrentDate(Data.DatePosted)}
            </S.Span>
          </S.Divider>
        </S.Divider>
        <S.Divider className="w-full flex items-center justify-start  mb-2 min-h-12">
          <S.Span className="text-sm text-slate-800 text-justify">
            {truncate(Data?.Description ?? "", { length: 200 })}
          </S.Span>
        </S.Divider>
        {!IsWidget && (
          <S.Divider
            onClick={() =>
              navigate(
                `${RouteChannel.ARTICLE_DETAILS.slice(0, RouteChannel.ARTICLE_DETAILS.length - 3)}${Data.Id}`,
              )
            }
            className="w-fit flex items-center justify-start cursor-pointer hover:font-semibold font-medium duration-300 ease-in-out"
          >
            <S.Span className="text-sm text-primary">Read article</S.Span>
            <Icon.ArrowOutward className="ml-1 text-sm p-[2px] text-primary" />
          </S.Divider>
        )}
      </S.Divider>
    </S.Divider>
  );
};

export default memo(ArticleCard);
