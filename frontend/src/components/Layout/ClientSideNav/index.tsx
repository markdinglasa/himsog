import { RouteChannel, SFC, SideNavProps } from "../../../types";
import { Menu } from "../../Navigation";
import {
  mdiAccountCreditCardOutline,
  mdiAlarmLightOutline,
  mdiBookOpenVariantOutline,
  mdiBottleTonicPlusOutline,
  mdiCalendarOutline,
  mdiFoodOutline,
  mdiViewDashboardOutline,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import Logo from "../../../asset/svg/logo.svg";
import Logo2 from "../../../asset/svg/logo2.svg";
import { cn } from "../../../utils";

export const ClientSideNav: SFC<SideNavProps> = ({
  ClassName,
  Toggle,
  Collapse = false,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container
        $isCollapse={Collapse}
        className={cn("bg-white p-2", ClassName)}
      >
        <S.LogoCon className="mt-2">
          <S.Image
            src={Collapse ? Logo2 : Logo}
            alt="himsog-logo"
            className="h-12"
            onClick={() => navigate(RouteChannel.CLIENT_DASHBOARD)}
          />
        </S.LogoCon>
        <S.MenuContainer className="overflow-auto h-full">
          <S.MenuContent $isCollapse={Collapse}>
            <Menu
              icon={mdiViewDashboardOutline}
              label="Dashboard"
              isCollapse={Collapse}
              onClick={() => {
                Toggle();
                navigate(RouteChannel.CLIENT_DASHBOARD);
              }}
            />
            {!Collapse ? <S.Category>setups</S.Category> : <S.HR />}
            <Menu
              icon={mdiBottleTonicPlusOutline}
              isCollapse={Collapse}
              isChild={true}
              label="Health"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.CLIENT_HEALTH);
              }}
            />
            <Menu
              icon={mdiBookOpenVariantOutline}
              isCollapse={Collapse}
              isChild={true}
              label="Ingridient"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.CLIENT_INGREDIENT);
              }}
            />
            {!Collapse ? <S.Category>transactions</S.Category> : <S.HR />}
          </S.MenuContent>
          <S.MenuContent $isCollapse={Collapse}>
            <Menu
              icon={mdiCalendarOutline}
              isCollapse={Collapse}
              label="Appointment"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.CLIENT_APPOINTMENT);
              }}
            />
            <Menu
              icon={mdiFoodOutline}
              isCollapse={Collapse}
              label="Meal Plan"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.CLIENT_APPOINTMENT);
              }}
            />
            <Menu
              icon={mdiAlarmLightOutline}
              isCollapse={Collapse}
              label="Reminder"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.CLIENT_REMINDER);
              }}
            />
            <Menu
              icon={mdiAccountCreditCardOutline}
              isCollapse={Collapse}
              label="Subscription"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.CLIENT_SUBSCRIPTION);
              }}
            />
            {/*!Collapse ? <S.Category>reports</S.Category> : <S.HR />*/}
          </S.MenuContent>
          {/*<S.MenuContent $isCollapse={Collapse}>
            <Menu
              icon={mdiChartMultiple}
              isCollapse={Collapse}
              label="Insights & Analytics"
              isParent={true}
              ClassName={Collapse ? "mb-[300px] " : "mb-20"}
              onClick={() => {
                Toggle();
                //navigate(RouteChannel.REPORTS);
              }}
            ></Menu>
            </S.MenuContent>*/}
        </S.MenuContainer>
      </S.Container>
    </>
  );
};
