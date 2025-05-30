import { RouteChannel, SFC, SideNavProps, Roles } from "../../../types";
import { Menu } from "../../Navigation";
import {
  mdiAccountOutline,
  mdiBookOpenVariantOutline,
  mdiCalendarTextOutline,
  mdiFoodOutline,
  mdiFoodVariant,
  mdiInvoiceSendOutline,
  mdiNewspaperVariantOutline,
  mdiScale,
  mdiViewDashboardOutline,
  mdiFoodTakeoutBoxOutline,
  mdiCreditCardOutline,
  mdiPasta,
  mdiChartLine,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import Logo from "../../../asset/svg/logo.svg";
import Logo2 from "../../../asset/svg/logo2.svg";
import { cn, renderPath, renderRole } from "../../../utils";
import API from "../../../hooks/api";
import { useAuth } from "../../../hooks";
import { useState } from "react";
import { AccessControl } from "../../DataDisplay";

export const SideNav: SFC<SideNavProps> = ({
  ClassName,
  Toggle,
  Collapse = false,
}) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { data } = API.Setup.User.Get(Number(auth?.user ?? 0));
  const path = renderPath(auth?.roles as Roles);
  const [active, setActive] = useState<RouteChannel>(path as RouteChannel);
  const { data: subs } = API.Setup.SubscriptionLine.GetByUser(
    Number(auth?.user),
  );
  const IsPremium: boolean =
    String(subs?.Status ?? "NA") === "Active" &&
    String(subs?.SubscriptionName ?? "NA") === "Premium";
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
            onClick={() => navigate(path)}
          />
        </S.LogoCon>
        {!Collapse && (
          <div className="w-full py-3 px-2 border-b">
            <div>
              <span className="text-md font-medium uppercase">
                {data?.Fullname ?? ""}
              </span>
            </div>
            <div>
              <span className="text-[12px] text-slate-600 uppercase">
                {renderRole(auth?.roles as Roles)}
              </span>
            </div>
          </div>
        )}

        <S.MenuContainer className="overflow-auto h-full">
          {!Collapse ? <S.Category>Menu</S.Category> : <S.HR />}
          <S.MenuContent $isCollapse={Collapse}>
            <AccessControl
              UserRoles={[Roles.nutritionist, Roles.admin, Roles.client]}
            >
              <Menu
                icon={mdiViewDashboardOutline}
                label="Dashboard"
                isCollapse={Collapse}
                onClick={() => {
                  Toggle();
                  navigate(path);
                  setActive(path as RouteChannel);
                }}
                IsActive={active === path}
              />
            </AccessControl>
            <AccessControl UserRoles={[Roles.admin]}>
              <Menu
                icon={mdiAccountOutline}
                isCollapse={Collapse}
                label="Users"
                onClick={() => {
                  Toggle();
                  navigate(RouteChannel.ADMIN_USER);
                  setActive(RouteChannel.ADMIN_USER);
                }}
                IsActive={active === RouteChannel.ADMIN_USER}
              />
            </AccessControl>

            <AccessControl UserRoles={[Roles.admin]}>
              <Menu
                icon={mdiBookOpenVariantOutline}
                isCollapse={Collapse}
                label="Subscriptions"
                onClick={() => {
                  Toggle();
                  navigate(RouteChannel.ADMIN_SUBSCRIPTION);
                  setActive(RouteChannel.ADMIN_SUBSCRIPTION);
                }}
                IsActive={active === RouteChannel.ADMIN_SUBSCRIPTION}
              />
            </AccessControl>
            <AccessControl UserRoles={[Roles.admin]}>
              <Menu
                icon={mdiFoodVariant}
                isCollapse={Collapse}
                label="Meal Plan"
                onClick={() => {
                  Toggle();
                  navigate(RouteChannel.ADMIN_MEAL_PLAN);
                  setActive(RouteChannel.ADMIN_MEAL_PLAN);
                }}
                IsActive={active === RouteChannel.ADMIN_MEAL_PLAN}
              />
            </AccessControl>
            <AccessControl OtherCondition={IsPremium} UserRoles={[Roles.admin]}>
              <Menu
                icon={mdiInvoiceSendOutline}
                isCollapse={Collapse}
                label="Request Access"
                onClick={() => {
                  Toggle();
                  navigate(RouteChannel.ADMIN_REQUEST_ACCESS);
                  setActive(RouteChannel.ADMIN_REQUEST_ACCESS);
                }}
                IsActive={active === RouteChannel.ADMIN_REQUEST_ACCESS}
              />
            </AccessControl>
            <AccessControl UserRoles={[Roles.nutritionist]}>
              <Menu
                icon={mdiFoodTakeoutBoxOutline}
                isCollapse={Collapse}
                label="Meals"
                onClick={() => {
                  Toggle();
                  navigate(RouteChannel.NUTRITIONIST_MEAL);
                  setActive(RouteChannel.NUTRITIONIST_MEAL);
                }}
                IsActive={active === RouteChannel.NUTRITIONIST_MEAL}
              />
            </AccessControl>

            <AccessControl UserRoles={[Roles.client, Roles.nutritionist]}>
              <Menu
                icon={mdiFoodOutline}
                isCollapse={Collapse}
                label="Meal Planner"
                isParent={true}
                onClick={() => {
                  Toggle();
                  //navigate(RouteChannel.REPORTS);
                }}
              >
                <AccessControl UserRoles={[Roles.nutritionist]}>
                  <Menu
                    icon={mdiFoodVariant}
                    isCollapse={Collapse}
                    label="Meal Plan"
                    onClick={() => {
                      Toggle();
                      navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN);
                      setActive(RouteChannel.NUTRITIONIST_MEAL_PLAN);
                    }}
                    IsActive={active === RouteChannel.NUTRITIONIST_MEAL_PLAN}
                  />
                  <AccessControl OtherCondition={IsPremium}>
                    <Menu
                      icon={mdiInvoiceSendOutline}
                      isCollapse={Collapse}
                      label="Requests"
                      onClick={() => {
                        Toggle();
                        navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN_REQUEST);
                        setActive(RouteChannel.NUTRITIONIST_MEAL_PLAN_REQUEST);
                      }}
                      IsActive={
                        active === RouteChannel.NUTRITIONIST_MEAL_PLAN_REQUEST
                      }
                    />
                  </AccessControl>

                  <Menu
                    icon={mdiCreditCardOutline}
                    isCollapse={Collapse}
                    label="Payments"
                    onClick={() => {
                      Toggle();
                      navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN_PAYMENT);
                      setActive(RouteChannel.NUTRITIONIST_MEAL_PLAN_PAYMENT);
                    }}
                    IsActive={
                      active === RouteChannel.NUTRITIONIST_MEAL_PLAN_PAYMENT
                    }
                  />
                </AccessControl>
                <AccessControl UserRoles={[Roles.client]}>
                  <Menu
                    icon={mdiPasta}
                    isCollapse={Collapse}
                    label="My Meal Plans"
                    onClick={() => {
                      Toggle();
                      navigate(RouteChannel.CLIENT_MY_MEAL_PLAN);
                      setActive(RouteChannel.CLIENT_MY_MEAL_PLAN);
                    }}
                    IsActive={active === RouteChannel.CLIENT_MY_MEAL_PLAN}
                  />
                  <Menu
                    icon={mdiFoodVariant}
                    isCollapse={Collapse}
                    label="Meal Plans"
                    onClick={() => {
                      Toggle();
                      navigate(RouteChannel.CLIENT_PRESET_MEAL_PLAN);
                      setActive(RouteChannel.CLIENT_PRESET_MEAL_PLAN);
                    }}
                    IsActive={active === RouteChannel.CLIENT_PRESET_MEAL_PLAN}
                  />

                  <AccessControl OtherCondition={IsPremium}>
                    <Menu
                      icon={mdiInvoiceSendOutline}
                      isCollapse={Collapse}
                      label="Find & Request"
                      onClick={() => {
                        Toggle();
                        navigate(RouteChannel.CLIENT_REQUEST_MEAL_PLAN);
                        setActive(RouteChannel.CLIENT_REQUEST_MEAL_PLAN);
                      }}
                      IsActive={
                        active === RouteChannel.CLIENT_REQUEST_MEAL_PLAN
                      }
                    />
                  </AccessControl>
                </AccessControl>
              </Menu>
            </AccessControl>

            <AccessControl UserRoles={[Roles.nutritionist, Roles.client]}>
              <Menu
                icon={mdiCalendarTextOutline}
                isCollapse={Collapse}
                label="Events"
                onClick={() => {
                  Toggle();
                  navigate(`${path}/event`);
                  setActive(`${path}/event` as RouteChannel);
                }}
                IsActive={active === `${path}/event`}
              />
            </AccessControl>
            <AccessControl UserRoles={[Roles.admin]}>
              <Menu
                icon={mdiCalendarTextOutline}
                isCollapse={Collapse}
                label="Events"
                onClick={() => {
                  Toggle();
                  navigate(RouteChannel.ADMIN_EVENT);
                  setActive(RouteChannel.ADMIN_EVENT);
                }}
                IsActive={active === RouteChannel.ADMIN_EVENT}
              />
            </AccessControl>
            <AccessControl
              UserRoles={[Roles.admin, Roles.nutritionist, Roles.client]}
            >
              <Menu
                icon={mdiNewspaperVariantOutline}
                isCollapse={Collapse}
                label="Health Articles"
                onClick={() => {
                  Toggle();
                  navigate(`${path}/health-article`);
                  setActive(`${path}/health-article` as RouteChannel);
                }}
                IsActive={active === `${path}/health-article`}
              />
            </AccessControl>
            <AccessControl UserRoles={[Roles.admin]}>
              <Menu
                icon={mdiScale}
                isCollapse={Collapse}
                label="Units"
                onClick={() => {
                  Toggle();
                  navigate(RouteChannel.ADMIN_UNIT);
                  setActive(RouteChannel.ADMIN_UNIT);
                }}
                IsActive={active === RouteChannel.ADMIN_UNIT}
              />
            </AccessControl>
            {/*<AccessControl UserRoles={[Roles.nutritionist]}>
              <Menu
                icon={mdiBookOpenVariantOutline}
                isCollapse={Collapse}
                label="Ingredients"
                onClick={() => {
                  Toggle();
                  navigate(RouteChannel.NUTRITIONIST_INGREDIENT);
                  setActive(RouteChannel.NUTRITIONIST_INGREDIENT);
                }}
                IsActive={active === RouteChannel.NUTRITIONIST_INGREDIENT}
              />
            </AccessControl>*/}
            <AccessControl UserRoles={[Roles.admin]}>
              <Menu
                icon={mdiChartLine}
                isCollapse={Collapse}
                label="Reports"
                isParent={true}
                onClick={() => {
                  Toggle();
                  //navigate(RouteChannel.REPORTS);
                }}
              >
                <Menu
                  icon={mdiBookOpenVariantOutline}
                  isCollapse={Collapse}
                  label="Subscription Reports"
                  onClick={() => {
                    Toggle();
                    navigate(RouteChannel.ADMIN_REPORT_SUBSCRIPTION);
                    setActive(RouteChannel.ADMIN_REPORT_SUBSCRIPTION);
                  }}
                  IsActive={active === RouteChannel.ADMIN_REPORT_SUBSCRIPTION}
                />
                <Menu
                  icon={mdiAccountOutline}
                  isCollapse={Collapse}
                  label="User Reports"
                  onClick={() => {
                    Toggle();
                    navigate(RouteChannel.ADMIN_REPORT_USER);
                    setActive(RouteChannel.ADMIN_REPORT_USER);
                  }}
                  IsActive={active === RouteChannel.ADMIN_REPORT_USER}
                />
              </Menu>
            </AccessControl>
          </S.MenuContent>
        </S.MenuContainer>
      </S.Container>
    </>
  );
};
