import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { CustomButton, PageBreadCrumbs } from "../../../../components";
import { cn } from "../../../../utils";
import { memo } from "react";
import Icon from "../../../../constants/icon";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../../../components/Surfaces/Forms";

export const ClientMealPlanPaymentPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const { Id } = useParams<{ Id: string }>();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.CLIENT_DASHBOARD),
    },
    {
      Text: "Meal Plans",
      OnClick: () => navigate(RouteChannel.CLIENT_MEAL_PLAN),
    },
    {
      Text: "Meal Plan Details",
      OnClick: () =>
        navigate(
          RouteChannel.CLIENT_MEAL_PLAN_DETAILS.replace(":Id", String(Id)),
        ),
    },
  ];

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Meal Plan - Payment" />
          <S.Actions>
            <CustomButton
              text="Back"
              leftIcon={<Icon.Back />}
              onClick={() =>
                navigate(
                  RouteChannel.CLIENT_MEAL_PLAN_DETAILS.replace(
                    ":Id",
                    String(Id),
                  ),
                )
              }
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="rounded-md border">
          <Form.Transaction.MealPlanPayment Title="Meal Plan Payment" />
        </S.PageContent>
      </S.Container>
    </>
  );
};

export default memo(ClientMealPlanPaymentPage);
