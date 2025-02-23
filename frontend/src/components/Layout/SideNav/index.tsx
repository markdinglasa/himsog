import { GenericFunction, RouteChannel, SFC } from "../../../types";
import { Menu } from "../../Navigation";
import {
  mdiAccountOutline,
  mdiCartOutline,
  mdiChartMultiple,
  mdiViewDashboardOutline,
  mdiScale,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import Logo from "../../../asset/svg/logo.svg";
import { cn } from "../../../utils";

interface SideNavProps {
  Toggle: GenericFunction;
  Collapse: boolean;
}

export const SideNav: SFC<SideNavProps> = ({
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
            src={Logo}
            alt="himsog-logo"
            className="h-12"
            onClick={() => navigate(RouteChannel.DASHBOARD)}
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
                navigate(RouteChannel.DASHBOARD);
              }}
            />
            {!Collapse ? <S.Category>setups</S.Category> : <S.HR />}

            <Menu
              icon={mdiAccountOutline}
              isCollapse={Collapse}
              isChild={true}
              label="User"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.USER);
              }}
            />
            <Menu
              icon={mdiScale}
              isCollapse={Collapse}
              isChild={true}
              label="Unit"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.UNIT);
              }}
            />
            {!Collapse ? <S.Category>transactions</S.Category> : <S.HR />}
          </S.MenuContent>
          <S.MenuContent $isCollapse={Collapse}>
            <Menu
              icon={mdiCartOutline}
              isCollapse={Collapse}
              label="Appointment"
              onClick={() => {
                Toggle();
                //navigate(RouteChannel.CART);
              }}
            />
            {!Collapse ? <S.Category>reports</S.Category> : <S.HR />}
          </S.MenuContent>
          <S.MenuContent $isCollapse={Collapse}>
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
          </S.MenuContent>
        </S.MenuContainer>
      </S.Container>
    </>
  );
};
