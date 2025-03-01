import { RouteChannel, SFC, SideNavProps } from "../../../types";
import { Menu } from "../../Navigation";
import {
  mdiAccountOutline,
  mdiChartMultiple,
  mdiViewDashboardOutline,
  mdiScale,
  mdiBookOpenVariantOutline,
  mdiAccountCreditCardOutline,
  mdiCommentQuoteOutline,
  mdiCloudKey,
  mdiSecurity,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import Logo from "../../../asset/svg/logo.svg";
import Logo2 from "../../../asset/svg/logo2.svg";
import { cn } from "../../../utils";

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
            src={Collapse ? Logo2 : Logo}
            alt="himsog-logo"
            className="h-12"
            onClick={() => navigate(RouteChannel.ADMIN_DASHBOARD)}
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
                navigate(RouteChannel.ADMIN_DASHBOARD);
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
                navigate(RouteChannel.ADMIN_USER);
              }}
            />
            <Menu
              icon={mdiBookOpenVariantOutline}
              isCollapse={Collapse}
              isChild={true}
              label="Ingridient"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.ADMIN_INGREDIENT);
              }}
            />
            <Menu
              icon={mdiScale}
              isCollapse={Collapse}
              isChild={true}
              label="Unit"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.ADMIN_UNIT);
              }}
            />
            <Menu
              icon={mdiAccountCreditCardOutline}
              isCollapse={Collapse}
              label="Subscription"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.ADMIN_SUBSCRIPTION);
              }}
            />
            {!Collapse ? <S.Category>transactions</S.Category> : <S.HR />}
          </S.MenuContent>
          <S.MenuContent $isCollapse={Collapse}>
            <Menu
              icon={mdiCommentQuoteOutline}
              isCollapse={Collapse}
              label="Feedback"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.ADMIN_FEEDBACK);
              }}
            />
            <Menu
              icon={mdiSecurity}
              isCollapse={Collapse}
              label="Requests"
              isParent={true}
              onClick={() => {
                Toggle();
                //navigate(RouteChannel.REPORTS);
              }}
            >
              <Menu
                icon={mdiCloudKey}
                isCollapse={Collapse}
                label="Access"
                onClick={() => {
                  Toggle();
                  navigate(RouteChannel.ADMIN_REQUEST_ACCESS);
                }}
              />
            </Menu>
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
