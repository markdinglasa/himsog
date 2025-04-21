import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { CustomButton, PageBreadCrumbs } from "../../../../components";
import { cn } from "../../../../utils";
import { memo } from "react";
import Icon from "../../../../constants/icon";
import { useNavigate } from "react-router-dom";
import MealPlanDetails from "../../../../components/DataDisplay/MealPlanDetails";
import MealPlanReviews from "../../../../components/DataDisplay/MealPlanReviews";

export const ClientMealPlanDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.CLIENT_DASHBOARD),
    },
    {
      Text: "Meal Plans",
      OnClick: () => navigate(RouteChannel.CLIENT_MEAL_PLAN),
    },
  ];
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Meal Plan Details" />
          <S.Actions>
            <CustomButton
              text="Back"
              leftIcon={<Icon.Back />}
              onClick={() => navigate(RouteChannel.CLIENT_MEAL_PLAN)}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="rounded-md border">
          <MealPlanDetails />
        </S.PageContent>
        <S.PageContent className="rounded-md border">
          <MealPlanReviews />
        </S.PageContent>
      </S.Container>
    </>
  );
};

export default memo(ClientMealPlanDetailsPage);
