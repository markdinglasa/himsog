import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { DoughnutChart, PageBreadCrumbs } from "../../../components";
import { cn } from "../../../utils";
import { memo } from "react";
import Card from "../../../components/Surfaces/Cards";
import {
  mdiCalendar,
  mdiCalendarTextOutline,
  mdiFoodVariant,
  mdiNewspaperVariantOutline,
  mdiPasta,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";
export const ClientDashboardPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={[]} Active="Dashboard" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Content className="">
          <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1rem] mb-[1rem]">
            <Card.Dashboard
              Icons={mdiPasta}
              Text={"0"}
              Title="My Meal Plans"
              OnClick={() => navigate(RouteChannel.CLIENT_MY_MEAL_PLAN)}
            />
            <Card.Dashboard
              Icons={mdiFoodVariant}
              Text={"0"}
              Title="Meal Plans"
              OnClick={() => navigate(RouteChannel.CLIENT_MEAL_PLAN)}
            />
            <Card.Dashboard
              Icons={mdiCalendar}
              Text={"0"}
              Title="Appointments"
              OnClick={() => navigate(RouteChannel.CLIENT_APPOINTMENT)}
            />
            <Card.Dashboard
              Icons={mdiCalendarTextOutline}
              Text={"0"}
              Title="Events"
              OnClick={() => navigate(RouteChannel.CLIENT_EVENT)}
            />
            <Card.Dashboard
              Icons={mdiNewspaperVariantOutline}
              Text={"0"}
              Title="Articles"
              OnClick={() => navigate(RouteChannel.CLIENT_ARTICLE)}
            />
          </S.CardContainer>
          <S.Divider className="w-full flex flex-col  mb-[1rem]">
            <S.Divider className="w-full flex items-center justify-end">
              <S.Label>Active Meal Plan</S.Label>
            </S.Divider>
            <S.Divider className="">
              <S.Divider className="w-full flex flex-col md:flex-row gap-[1rem] ">
                <S.Divider className="w-full flex flex-col gap-[1rem] md:w-8/12 items-start justify-start rounded-md border bg-white p-[1rem]">
                  Details here
                </S.Divider>
                <S.Divider className="w-full md:w-4/12 flex flex-col flex items-center justify-center rounded-md border bg-white p-[1rem] relative">
                  <S.Divider className="w-full">
                    <S.Span className="text-md font-medium"> Progress </S.Span>
                  </S.Divider>
                  <S.Divider className="w-full">
                    <S.Divider className="w-full h-full flex items-center justify-center absolute top-0 left-0 ">
                      <S.Span className="text-md font-medium mt-5">
                        {0}% completed
                      </S.Span>
                    </S.Divider>
                    <DoughnutChart ClassName="w-full " data={[]} />
                  </S.Divider>
                </S.Divider>
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(ClientDashboardPage);
