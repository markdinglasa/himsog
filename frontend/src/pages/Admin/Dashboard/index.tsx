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
import { memo } from "react";

export const AdminDashboardPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const { data: count } = API.Utility.Count.AdminCount();
  const { data: subscount } = API.Utility.Count.AdminSubscriptionCount();
  const { data: subsrevenue } =
    API.Utility.Count.AdminSusbcriptionMonthlyRevenue();
  // console.log(subsrevenue);
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={[]} Active="Dashboard" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Content className="">
          <S.CardContainer className="flex md:flex-row flex-col gap-2 w-full mb-2">
            <IncrementCard
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
            <IncrementCard
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
            <IncrementCard
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
            />
          </S.CardContainer>
          <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
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
        <S.Content className="mt-2 flex flex-col md:flex-row gap-2 mb-2">
          <S.Divider className="w-full md:w-8/12  ">
            <LineChart
              category="Subscription"
              title="Monthly Revenue"
              ClassName="border rounded-md p-[1rem]"
              data={subsrevenue}
            />
          </S.Divider>
          <S.Divider className="w-full md:w-4/12 ">
            {/*<DoughnutChart
              title="Most Subscribe Subscription"
              ClassName="border rounded-md p-[1rem]"
              category="Subscription"
              data={subscount}
            />*/}
          </S.Divider>
        </S.Content>
        {/*<div dangerouslySetInnerHTML={{ __html: NoReplyEmail }}></div>*/}
      </S.Container>
    </>
  );
};

export default memo(AdminDashboardPage);
