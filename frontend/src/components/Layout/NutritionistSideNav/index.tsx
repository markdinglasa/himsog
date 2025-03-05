import { RouteChannel, SFC, SideNavProps, Roles } from "../../../types";
import { Menu } from "../../Navigation";
import {
  mdiCalendarOutline,
  mdiCalendarTextOutline,
  mdiFoodOutline,
  mdiInvoiceSendOutline,
  mdiNewspaperVariantOutline,
  mdiViewDashboardOutline,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import Logo from "../../../asset/svg/logo.svg";
import Logo2 from "../../../asset/svg/logo2.svg";
import { cn, renderPath } from "../../../utils";
import API from "../../../hooks/api";
import { useAuth } from "../../../hooks";
import { useState } from "react";

export const NutritionistSideNav: SFC<SideNavProps> = ({
  ClassName,
  Toggle,
  Collapse = false,
}) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { data } = API.Setup.User.Get(Number(auth?.user ?? 0));
  const path = renderPath(auth?.roles as Roles);
  const [active, setActive] = useState<RouteChannel>(path as RouteChannel);
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
            onClick={() => navigate(RouteChannel.NUTRITIONIST_DASHBOARD)}
          />
        </S.LogoCon>
        {!Collapse && (
          <div className="w-full py-3 px-2 border-b">
            <div>
              <span className="text-sm font-medium">
                {data?.Fullname ?? ""}
              </span>
            </div>
            <div>
              <span className="text-sm text-slate-600">
                {data?.Email ?? ""}
              </span>
            </div>
          </div>
        )}
        {!Collapse ? <S.Category>Menu</S.Category> : <S.HR />}
        <S.MenuContainer className="overflow-auto h-full">
          <S.MenuContent $isCollapse={Collapse}>
            <Menu
              icon={mdiViewDashboardOutline}
              label="Dashboard"
              isCollapse={Collapse}
              onClick={() => {
                Toggle();
                navigate(RouteChannel.NUTRITIONIST_DASHBOARD);
                setActive(path as RouteChannel);
              }}
              IsActive={active === path}
            />
          </S.MenuContent>
          <S.MenuContent $isCollapse={Collapse}>
            <Menu
              icon={mdiFoodOutline}
              isCollapse={Collapse}
              label="Meal Plans"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN);
                setActive(RouteChannel.NUTRITIONIST_MEAL_PLAN);
              }}
              IsActive={active === RouteChannel.NUTRITIONIST_MEAL_PLAN}
            />
            <Menu
              icon={mdiInvoiceSendOutline}
              isCollapse={Collapse}
              label="Requests"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.NUTRITIONIST_REQUEST);
                setActive(RouteChannel.NUTRITIONIST_REQUEST);
              }}
              IsActive={active === RouteChannel.NUTRITIONIST_REQUEST}
            />
            <Menu
              icon={mdiCalendarTextOutline}
              isCollapse={Collapse}
              label="Events"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.NUTRITIONIST_EVENT);
                setActive(RouteChannel.NUTRITIONIST_EVENT);
              }}
              IsActive={active === RouteChannel.NUTRITIONIST_EVENT}
            />
            <Menu
              icon={mdiCalendarOutline}
              isCollapse={Collapse}
              label="Appointments"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.NUTRITIONIST_APPOINTMENT);
                setActive(RouteChannel.NUTRITIONIST_APPOINTMENT);
              }}
              IsActive={active === RouteChannel.NUTRITIONIST_APPOINTMENT}
            />
            <Menu
              icon={mdiNewspaperVariantOutline}
              isCollapse={Collapse}
              label="Health Articles"
              onClick={() => {
                Toggle();
                navigate(RouteChannel.NUTRITIONIST_ARTICLE);
                setActive(RouteChannel.NUTRITIONIST_ARTICLE);
              }}
              IsActive={active === RouteChannel.NUTRITIONIST_ARTICLE}
            />
          </S.MenuContent>
        </S.MenuContainer>
      </S.Container>
    </>
  );
};
