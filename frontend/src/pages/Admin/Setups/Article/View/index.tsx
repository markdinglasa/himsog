import {
  APIChannel,
  ArticleHC,
  HeadCell,
  QueryKey,
  RouteChannel,
  SFC,
} from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  EnhancedTable,
  Skeleton,
} from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../../utils";
import API from "../../../../../hooks/api";
import Articles from "../../../../../components/DataDisplay/Articles";

export const ArticleViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];
  const { data: articles, isLoading } = API.Setup.Article.GetAllInvalidated();

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Articles" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Invalidate Articles"
              Rows={articles ?? []}
              HeadCells={ArticleHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              OnRecordDelete={() => {}}
              RemoveApiRoute={APIChannel.ARTICLE_ID}
              QueryKey={QueryKey.ARTICLE_INVALIDATED}
              DetailsRoute={RouteChannel.ADMIN_ARTICLE_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
            />
          </Suspense>
        </S.PageContent>
        <S.PageContent className="border rounded-md">
          <Articles />
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(ArticleViewPage);
