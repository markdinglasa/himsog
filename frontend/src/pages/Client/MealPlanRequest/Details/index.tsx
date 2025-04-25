import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { CustomButton, PageBreadCrumbs } from "../../../../components";
import { cn } from "../../../../utils";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../../../constants/icon";
import MealPlanRequestDetails from "../../../../components/DataDisplay/MealPlanRequestDetails";

export const MealPlanRequestDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.CLIENT_DASHBOARD),
    },
    {
      Text: "Meal Plan",
      OnClick: () => navigate(RouteChannel.CLIENT_MEAL_PLAN),
    },
    {
      Text: "Find & Request",
      OnClick: () => navigate(RouteChannel.CLIENT_REQUEST_MEAL_PLAN),
    },
  ];
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Meal Plan - Request Details" />
          <S.Actions>
            <CustomButton
              text="Back"
              leftIcon={<Icon.Back />}
              onClick={() => navigate(RouteChannel.CLIENT_REQUEST_MEAL_PLAN)}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rouned-md">
          <MealPlanRequestDetails />
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(MealPlanRequestDetailsPage);
