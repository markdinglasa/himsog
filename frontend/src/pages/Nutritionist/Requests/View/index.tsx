import {
  APIChannel,
  HeadCell,
  mealPlanRequestHC,
  MealPlanRequestTables,
  QueryKey,
  RouteChannel,
  SFC,
} from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  PageBreadCrumbs,
  EnhancedTable,
  Skeleton,
} from "../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import API from "../../../../hooks/api";
import { useAuth } from "../../../../hooks";
export const NutritionistRequestViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];
  const { auth } = useAuth();
  const { data: requests, isLoading } =
    API.Transaction.MealPlanRequest.GetAllByNutritionist(
      Number(auth?.user ?? 0),
    );
  return (
    <>
      <S.Container className={ClassName}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Meal Plan Requests" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Requested personalize plans"
              Rows={(requests as MealPlanRequestTables) ?? []}
              HeadCells={mealPlanRequestHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              RemoveApiRoute={APIChannel.MEAL_PLAN_REQUEST_ID}
              DetailsRoute={RouteChannel.NUTRITIONIST_MEAL_PLAN_REQUEST_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
              QueryKey={QueryKey.INGREDIENT}
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(NutritionistRequestViewPage);
