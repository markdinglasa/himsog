import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { PageBreadCrumbs } from "../../../components";
import { cn, formatNumber } from "../../../utils";
import { memo } from "react";
import Card from "../../../components/Surfaces/Cards";
import Icon from "../../../constants/icon";
import {
  mdiCalendar,
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
  console.log(data?.[0]?.Count ?? 0);
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
              Amount={formatNumber(5355)}
              Percent={1}
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
              IsNegative={false}
              PercentText={"Since last week"}
            />
            <Card.Increment
              Text="monthly's sales"
              Amount={formatNumber(94355)}
              Percent={1}
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
              IsNegative={false}
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
              Icons={mdiCalendar}
              Text={String(data?.[3]?.Count ?? 0)}
              Title="Appointments"
              OnClick={() => navigate(RouteChannel.NUTRITIONIST_APPOINTMENT)}
            />
          </S.CardContainer>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(NutritionistDashboardPage);
