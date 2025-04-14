import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { PageBreadCrumbs, Skeleton } from "../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../utils";
// import API from "../../../../hooks/api";
// import Form from "../../../../components/Surfaces/Forms";

export const MealPlanNewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="New Meal Plan" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent className="rounded-md border">
          <Suspense fallback={<Skeleton />}></Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(MealPlanNewPage);
