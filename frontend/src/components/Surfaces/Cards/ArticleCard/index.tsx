import { ArticleTable, SFC } from "../../../../types";
import * as S from "../../../../styles";
import DefaultImg from "../../../../asset/images/default-image.jpg";
import Icon from "../../../../constants/icon";
import { memo } from "react";
import { truncate } from "lodash";
import { getCurrentDate } from "../../../../utils";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../modals";
import ArticleDetails from "../../../DataDisplay/ArticleDetails";
import { AccessControl } from "../../../DataDisplay";

export interface ArticleCardProps {
  Data: ArticleTable;
  //onClick: () => void;
  IsWidget?: boolean;
  IsLoading: boolean;
  IsPublic?: boolean;
}

const ArticleCard: SFC<ArticleCardProps> = ({
  ClassName,
  Data,
  IsWidget = false,
  IsLoading = true,
  IsPublic = false,
}) => {
  const [isDisplay, toggleDisplay] = useToggle(false);

  return (
    <>
      <S.Divider
        key={Data.Id}
        onClick={toggleDisplay}
        className={`${IsWidget ? "flex flex-row" : "border bg-slate-50"} w-full cursor-pointer hover:shadow-md rounded-md h-fit items-center justify-center  ${ClassName}`}
      >
        <AccessControl
          OtherCondition={!!(Data?.Image && Data?.Image?.length > 0)}
        >
          <S.Divider className="w-full ">
            <S.Image
              src={Data.Image ?? DefaultImg}
              alt="Article image"
              className="w-full h-[40%]"
            />
          </S.Divider>
        </AccessControl>

        <S.Divider className="flex flex-col p-5">
          <S.Divider className="w-full overflow-hidden mb-2 flex flex-col">
            <S.Span className="text-md font-medium">{Data.Title}</S.Span>
            <S.Divider className="flex items-center w-full">
              <Icon.Calendar className="p-[2px] text-slate-400 " />
              <S.Span className="text-sm ">
                {getCurrentDate(Data.DatePosted)}
              </S.Span>
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full flex items-center justify-start  mb-2 min-h-12">
            <S.Span className="text-sm text-slate-800 text-justify">
              {truncate(Data?.Description ?? "No Description", { length: 200 })}
            </S.Span>
          </S.Divider>

          {/*!IsWidget && (
          <S.Divider
            onClick={() =>
              navigate(
                `${path}${RouteChannel.ARTICLE_DETAILS.replace(":Id", Data.Id ? Data.Id.toString() : "")}`,
              )
            }
            className="w-fit flex items-center justify-start cursor-pointer hover:font-semibold font-medium duration-300 ease-in-out"
          >
            <S.Span className="text-sm text-primary">Read article</S.Span>
            <Icon.ArrowOutward className="ml-1 text-sm p-[2px] text-primary" />
          </S.Divider>
        )*/}
        </S.Divider>
        <S.Divider className="w-full h-12 border-t">
          {/*POSTED BY HERE*/}
        </S.Divider>
      </S.Divider>
      <CustomModal
        close={toggleDisplay}
        title="Health & Nutrition Article Details"
        open={isDisplay}
        ClassName="w-full md:w-[50rem] h-[90vh] overflow-auto"
      >
        <ArticleDetails Data={Data} Loading={IsLoading} IsPublic={IsPublic} />
      </CustomModal>
    </>
  );
};

export default memo(ArticleCard);
