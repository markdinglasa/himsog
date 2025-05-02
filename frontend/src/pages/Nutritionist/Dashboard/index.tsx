import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { PageBreadCrumbs } from "../../../components";
import { cn, formatNumber } from "../../../utils";
import { memo, useMemo } from "react";
import Card from "../../../components/Surfaces/Cards";
import Icon from "../../../constants/icon";
import {
  mdiCreditCardOutline,
  mdiFoodTakeoutBoxOutline,
  mdiFoodVariant,
  mdiInvoiceSendOutline,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";
import API from "../../../hooks/api";
import { useAuth } from "../../../hooks";

const NutritionistDashboardPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { data } = API.Utility.Count.NutritionistCount(Number(auth?.user ?? 0));
  const { data: mrevenue } = API.Utility.Count.MealPlanMonthlyRevenue(
    Number(auth?.user ?? 0),
  );
  const { data: drevenue } = API.Utility.Count.MealPlanDailyRevenue(
    Number(auth?.user ?? 0),
  );
  const percentageMonthRevenue = useMemo(() => {
    if ((mrevenue?.PreviousMonthRevenue ?? 0) === 0) {
      return 0; // Avoid division by zero
    }
    return Math.round(
      (((mrevenue?.Revenue ?? 0) - (mrevenue?.PreviousMonthRevenue ?? 0)) /
        (mrevenue?.PreviousMonthRevenue ?? 1)) *
        100,
    );
  }, [mrevenue?.Revenue, mrevenue?.PreviousMonthRevenue]);
  const percentageDayRevenue = useMemo(() => {
    if ((drevenue?.PreviousMonthRevenue ?? 0) === 0) {
      return 0; // Avoid division by zero
    }
    return Math.round(
      (((drevenue?.Revenue ?? 0) - (drevenue?.PreviousMonthRevenue ?? 0)) /
        (drevenue?.PreviousMonthRevenue ?? 1)) *
        100,
    );
  }, [drevenue?.Revenue, drevenue?.PreviousMonthRevenue]);
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={[]} Active="Dashboard" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Content className="flex flex-col gap-[1rem] mb-[1rem]">
          <S.CardContainer className="flex md:flex-row flex-col gap-[1rem] w-full">
            <Card.Increment
              Text="Today's sales"
              Amount={formatNumber(Number(drevenue?.Revenue ?? 0))}
              Percent={percentageDayRevenue}
              Icon={
                <Icon.Cart
                  className="text-white w-full h-full"
                  style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    padding: "10px",
                  }}
                />
              }
              IsNegative={(mrevenue?.Revenue ?? 1) < 1}
              PercentText={"Since yesterday"}
            />
            <Card.Increment
              Text="monthly's sales"
              Amount={formatNumber(Number(mrevenue?.Revenue ?? 0))}
              Percent={percentageMonthRevenue}
              Icon={
                <Icon.Money
                  className="text-white w-full h-full"
                  style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    padding: "10px",
                  }}
                />
              }
              IsNegative={Number(mrevenue?.Revenue ?? 1) < 1}
              PercentText={"Since last month"}
            />
          </S.CardContainer>
          <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem]">
            <Card.Dashboard
              Icons={mdiFoodTakeoutBoxOutline}
              Text={String(data?.[0]?.Count ?? 0)}
              Title="Meals"
              OnClick={() => navigate(RouteChannel.NUTRITIONIST_MEAL)}
            />
            <Card.Dashboard
              Icons={mdiFoodVariant}
              Text={String(data?.[1]?.Count ?? 0)}
              Title="Meal Plans"
              OnClick={() => navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN)}
            />
            <Card.Dashboard
              Icons={mdiInvoiceSendOutline}
              Text={String(data?.[2]?.Count ?? 0)}
              Title="Meal Plan - Requests"
              OnClick={() =>
                navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN_REQUEST)
              }
            />
            <Card.Dashboard
              Icons={mdiCreditCardOutline}
              Text={String(data?.[3]?.Count ?? 0)}
              Title="Payments"
              OnClick={() =>
                navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN_PAYMENT)
              }
            />
          </S.CardContainer>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(NutritionistDashboardPage);
