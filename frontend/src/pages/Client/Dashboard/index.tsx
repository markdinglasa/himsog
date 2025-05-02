import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { PageBreadCrumbs } from "../../../components";
import { cn } from "../../../utils";
import { memo } from "react";
import Card from "../../../components/Surfaces/Cards";
import {
  mdiCalendarTextOutline,
  mdiFoodVariant,
  mdiNewspaperVariantOutline,
  mdiPasta,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";
import ActiveMealPlan from "../../../components/DataDisplay/ActiveMealPlan";
import API from "../../../hooks/api";
import { useAuth } from "../../../hooks";

export const ClientDashboardPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { data: adovatecount } = API.Utility.Count.ClientCount(
    Number(auth?.user ?? 0),
  );

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={[]} Active="Dashboard" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Content className="">
          <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem] mb-[1rem]">
            <Card.Dashboard
              Icons={mdiPasta}
              Text={String(adovatecount?.[0]?.Count ?? 0)}
              Title="My Meal Plans"
              OnClick={() => navigate(RouteChannel.CLIENT_MY_MEAL_PLAN)}
            />
            <Card.Dashboard
              Icons={mdiFoodVariant}
              Text={String(adovatecount?.[1]?.Count ?? 0)}
              Title="Meal Plans"
              OnClick={() => navigate(RouteChannel.CLIENT_MEAL_PLAN)}
            />

            <Card.Dashboard
              Icons={mdiCalendarTextOutline}
              Text={String(adovatecount?.[2]?.Count ?? 0)}
              Title="Events"
              OnClick={() => navigate(RouteChannel.CLIENT_EVENT)}
            />
            <Card.Dashboard
              Icons={mdiNewspaperVariantOutline}
              Text={String(adovatecount?.[3]?.Count ?? 0)}
              Title="Articles"
              OnClick={() => navigate(RouteChannel.CLIENT_ARTICLE)}
            />
          </S.CardContainer>
          <S.Divider className="w-full flex flex-col  mb-[1rem]">
            <S.Divider className="w-full flex items-center justify-end">
              <S.Label>Active Meal Plan</S.Label>
            </S.Divider>
            <S.Divider className="">
              <ActiveMealPlan />
            </S.Divider>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(ClientDashboardPage);
