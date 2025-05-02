import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { PageBreadCrumbs, Skeleton } from "../../../../components";
import { cn } from "../../../../utils";
import { memo, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Articles from "../../../../components/DataDisplay/Articles";

export const ArticleViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.CLIENT_DASHBOARD),
    },
  ];
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Health Articles" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent className="rounded-md border">
          <Suspense fallback={<Skeleton />}>
            <Articles IsPublic={false} />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(ArticleViewPage);
