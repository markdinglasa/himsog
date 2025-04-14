import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { CustomButton, PageBreadCrumbs } from "../../../../components";
import { cn } from "../../../../utils";
import { memo } from "react";
import Icon from "../../../../constants/icon";
import { useNavigate } from "react-router-dom";

export const ClientMealPlanDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={[]} Active="Dashboard" />
          <S.Actions>
            <CustomButton
              text="Back"
              leftIcon={<Icon.Back />}
              onClick={() => navigate(RouteChannel.CLIENT_MEAL_PLAN)}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.Content className="">Meal Plan Details</S.Content>
      </S.Container>
    </>
  );
};

export default memo(ClientMealPlanDetailsPage);
