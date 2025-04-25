import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { PageBreadCrumbs, Skeleton } from "../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import MealPlanRequestDetails from "../../../../components/DataDisplay/MealPlanRequestDetails";

export const NutritionistRequestDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
    {
      Text: "Meal Plan - Requests",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN_REQUEST),
    },
  ];

  return (
    <>
      <S.Container className={ClassName}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Meal Plan - Request Details" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <MealPlanRequestDetails IsAdvocate={true} />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(NutritionistRequestDetailsPage);
