import { ArticleInitial, ArticleTable, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { cn, getCurrentDate } from "../../../utils";
import { AccessControl } from "..";
import Icon from "../../../constants/icon";
import { memo } from "react";
import { Skeleton } from "../../Feedback";

interface ArticleDetailsProps {
  Data: ArticleTable;
  Loading: boolean;
  IsPublic: boolean;
}

export const ArticleDetails: SFC<ArticleDetailsProps> = ({
  ClassName,
  Data = ArticleInitial,
  Loading = false,
  IsPublic = false,
}) => {
  if (Loading) return <Skeleton />;
  return (
    <S.Container className={cn("w-full", ClassName)}>
      <S.Divider className="w-full">
        <AccessControl
          OtherCondition={(Data?.Remarks ?? "").length > 0 && !IsPublic}
        >
          <S.Divider className="w-full overflow-hidden bg-blue-100 border-blue-400 p-[1rem] rounded-md border mb-[1rem] flex flex-col">
            <S.Span className="text-md font-medium">Remarks</S.Span>
            <S.Span className="text-sm ">{Data?.Remarks}</S.Span>
          </S.Divider>
        </AccessControl>
        <AccessControl
          OtherCondition={!!(Data?.Image && Data?.Image?.length > 0)}
        >
          <S.Divider className="w-full">
            <S.Image
              src={Data?.Image ?? ""}
              alt={Data?.Title ?? ""}
              className="w-full"
            />
          </S.Divider>
        </AccessControl>
        <S.Divider className="w-full flex flex-col py-[1rem]">
          <S.Divider className="w-full overflow-hidden ">
            <S.Span className="text-2xl font-medium">{Data?.Title}</S.Span>
          </S.Divider>
          <S.Divider className="w-full flex flex-row items-center gap-[1rem] justify-start ">
            <S.Divider className="flex items-center w-fit">
              <Icon.Calendar className="p-[2px] text-slate-400 " />
              <S.Span className="ml-2 text-sm text-slate-600">
                {getCurrentDate(Data?.DatePosted)}
              </S.Span>
            </S.Divider>
            <S.Divider className="flex items-center w-fit">
              <Icon.Identity className="p-[2px] text-slate-400 " />
              <S.Span className="ml-2 text-sm text-slate-600">
                {Data?.PostedBy}
              </S.Span>
            </S.Divider>
          </S.Divider>
        </S.Divider>

        <AccessControl
          OtherCondition={!!(Data?.Link && Data?.Link?.length > 0)}
        >
          <S.Divider className="w-full flex items-center flex-row justify-start py-5">
            <S.Span className="text-sm text-slate-600">Article URL:</S.Span>
            <a
              className="text-sm text-blue-400 ml-3"
              href={Data?.Link ?? ""}
              target="_blank"
            >
              {Data?.Link ?? ""}
            </a>
          </S.Divider>
        </AccessControl>
        <S.Divider className="w-full py-5">
          <p className="text-md font-medium">About this Article</p>
          <p className="text-slate-600 text-sm text-justify">
            {Data?.Description ?? "No Description"}
          </p>
        </S.Divider>
      </S.Divider>
    </S.Container>
  );
};

export default memo(ArticleDetails);
