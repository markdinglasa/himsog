import {
  APIChannel,
  HeadCell,
  MealPlanHC,
  MealPlanTables,
  QueryKey,
  RouteChannel,
  SFC,
} from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  EnhancedTable,
} from "../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../utils";
import API from "../../../../hooks/api";

export const MealPlanPageView: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];

  const { data: MealPlans, isLoading } = API.Setup.MealPlan.GetAllByAdmin();
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Meal Plan" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent className="rounded-md border">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Meal Plans"
              Rows={(MealPlans as MealPlanTables) ?? []}
              HeadCells={MealPlanHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              RemoveApiRoute={APIChannel.MEAL_PLAN_ID}
              DetailsRoute={RouteChannel.ADMIN_MEAL_PLAN_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
              QueryKey={QueryKey.MEAL_PLAN}
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(MealPlanPageView);
