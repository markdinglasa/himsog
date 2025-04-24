import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import {
  DoughnutChart,
  IncrementCard,
  LineChart,
  PageBreadCrumbs,
} from "../../../components";
import Card from "../../../components/Surfaces/Cards";
import Icon from "../../../constants/icon";
import {
  mdiAccountCreditCardOutline,
  mdiAccountOutline,
  mdiCalendarTextOutline,
  mdiFoodVariant,
  mdiInvoiceSendOutline,
  mdiScale,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";
import { cn, formatNumber } from "../../../utils";
import API from "../../../hooks/api";
import { memo, useMemo } from "react";

export const AdminDashboardPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const { data: count } = API.Utility.Count.AdminCount();
  const { data: subscount } = API.Utility.Count.AdminSubscriptionCount();
  const { data: subsrevenue } =
    API.Utility.Count.AdminSusbcriptionMonthlyRevenue();
  const { data: subsRevenueWithPercentage } =
    API.Utility.Count.AdminSubscriptionMonthlyRevenueWithPercentage();

  const { data: subsDailyRevenueWithPercentage } =
    API.Utility.Count.AdminSubscriptionDailyRevenueWithPercentage();
  // console.log(subsDailyRevenueWithPercentage);

  const percentageMonthRevenue = useMemo(() => {
    return Math.round(
      (((subsRevenueWithPercentage?.Revenue ?? 0) -
        (subsRevenueWithPercentage?.PreviousMonthRevenue ?? 0)) /
        (subsRevenueWithPercentage?.PreviousMonthRevenue ?? 1)) *
        100,
    );
  }, [
    subsRevenueWithPercentage?.Revenue,
    subsRevenueWithPercentage?.PreviousMonthRevenue,
  ]);

  const percentageDayRevenue = useMemo(() => {
    const previousDayRevenue =
      subsDailyRevenueWithPercentage?.PreviousDayRevenue ?? 0;
    const subtotal =
      (subsDailyRevenueWithPercentage?.Revenue ?? 0) - previousDayRevenue;
    return previousDayRevenue > 0
      ? Math.round((subtotal / previousDayRevenue) * 100)
      : 0;
  }, [
    subsDailyRevenueWithPercentage?.Revenue,
    subsDailyRevenueWithPercentage?.PreviousDayRevenue,
  ]);
  console.log(subsDailyRevenueWithPercentage?.Revenue ?? 0);
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={[]} Active="Dashboard" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Content className="mb-[1rem]">
          <S.CardContainer className="flex md:flex-row flex-col gap-[1rem] w-full mb-[1rem]">
            <IncrementCard
              Text={`Today's sales (${subsDailyRevenueWithPercentage?.DayName ?? "Monday"})`}
              Amount={formatNumber(
                Number(subsDailyRevenueWithPercentage?.Revenue ?? 0),
              )}
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
              IsNegative={(subsDailyRevenueWithPercentage?.Revenue ?? 0) < 1}
              PercentText={"Since yesterday"}
            />
            <IncrementCard
              Text={`monthly's sales (${subsRevenueWithPercentage?.MonthName ?? "January"})`}
              Amount={formatNumber(
                Number(subsRevenueWithPercentage?.Revenue ?? 0),
              )}
              IsNegative={(subsRevenueWithPercentage?.Revenue ?? 0) < 1}
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
              PercentText={"Since last month"}
            />
            {/*<IncrementCard
              Text="most sold item"
              Amount={formatNumber(100)}
              Percent={1}
              Icon={
                <Icon.Burger
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
            <IncrementCard
              Text="new customers"
              Amount={formatNumber(100)}
              Percent={15}
              Icon={
                <Icon.People
                  className="text-white w-full h-full"
                  style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    padding: "10px",
                  }}
                />
              }
              IsNegative={true}
              PercentText={"Since last month"}
            />*/}
          </S.CardContainer>
          <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1rem]">
            <Card.Dashboard
              Icons={mdiAccountOutline}
              Text={String(count?.[0]?.Count ?? 0)}
              Title="User"
              OnClick={() => navigate(RouteChannel.ADMIN_USER)}
            />
            <Card.Dashboard
              Icons={mdiFoodVariant}
              Text={String(count?.[5]?.Count ?? 0)}
              Title="Meal Plans"
              OnClick={() => navigate(RouteChannel.ADMIN_MEAL_PLAN)}
            />
            <Card.Dashboard
              Icons={mdiAccountCreditCardOutline}
              Text={String(count?.[2]?.Count ?? 0)}
              Title="Susbcription"
              OnClick={() => navigate(RouteChannel.ADMIN_SUBSCRIPTION)}
            />
            <Card.Dashboard
              Icons={mdiInvoiceSendOutline}
              Text={String(count?.[3]?.Count)}
              Title="Request Access"
              OnClick={() => navigate(RouteChannel.ADMIN_REQUEST_ACCESS)}
            />
            <Card.Dashboard
              Icons={mdiCalendarTextOutline}
              Text={String(count?.[4]?.Count)}
              Title="Events"
              OnClick={() => navigate(RouteChannel.ADMIN_EVENT)}
            />
            <Card.Dashboard
              Icons={mdiCalendarTextOutline}
              Text={String(count?.[5]?.Count)}
              Title="Health Articles"
              OnClick={() => navigate(RouteChannel.ADMIN_ARTICLE)}
            />
            <Card.Dashboard
              Icons={mdiScale}
              Text={String(count?.[1]?.Count ?? 0)}
              Title="Unit"
              OnClick={() => navigate(RouteChannel.ADMIN_UNIT)}
            />
          </S.CardContainer>
        </S.Content>
        <S.Content className="mt-2 flex flex-col md:flex-row gap-[1rem] mb-[1rem]">
          <S.Divider className="w-full md:w-8/12  ">
            <LineChart
              category="Subscription"
              title="Monthly Revenue"
              ClassName="border rounded-md p-[1rem]"
              data={subsrevenue}
            />
          </S.Divider>
          <S.Divider className="w-full md:w-4/12 ">
            <DoughnutChart
              title="Most Subscribe Subscription"
              ClassName="border rounded-md p-[1rem]"
              category="Subscription"
              data={subscount ?? [{ Name: "NA", NameCount: 0 }]}
            />
          </S.Divider>
        </S.Content>
        {/*<div dangerouslySetInnerHTML={{ __html: NoReplyEmail }}></div>*/}
      </S.Container>
    </>
  );
};

export default memo(AdminDashboardPage);
