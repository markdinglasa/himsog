import {
  APIChannel,
  ButtonType,
  HeadCell,
  MealHC,
  MealTables,
  QueryKey,
  RouteChannel,
  SFC,
} from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  CustomButton,
  EnhancedTable,
} from "../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../utils";
import Icon from "../../../../constants/icon";
import { useAuth } from "../../../../hooks";
import API from "../../../../hooks/api";

export const MealPageView: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];
  const { auth } = useAuth();
  const { data: meals, isLoading } = API.Setup.Meal.GetAll(
    Number(auth?.user ?? 0),
  );
  // console.log(meals);
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Meal" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Add className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.NUTRITIONIST_MEAL_NEW)}
              text="New"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="rounded-md border">
          <Suspense fallback={<Skeleton />}>
            <Suspense fallback={<Skeleton />}>
              <EnhancedTable
                Title="Meals"
                Rows={(meals as MealTables) || []}
                HeadCells={MealHC as HeadCell<unknown>[]}
                IsLoading={isLoading}
                RemoveApiRoute={APIChannel.MEAL_ID}
                DetailsRoute={RouteChannel.NUTRITIONIST_MEAL_DETAILS}
                ClassName="md:max-h-[calc(100vh-200px)]"
                QueryKey={QueryKey.MEAL}
              />
            </Suspense>
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(MealPageView);
