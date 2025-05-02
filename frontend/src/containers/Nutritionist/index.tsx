import { Outlet, useNavigate } from "react-router-dom";
import { Roles, RouteChannel, SFC } from "../../types";
import { PageFooter, Header, SideNav } from "../../components";
import { useAuth, useSignOut, useToggle } from "../../hooks";
import * as S from "./Styles";
import { useEffect } from "react";
import API from "../../hooks/api";

export const NutritionistLayout: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const { reSignOut } = useSignOut();
  const navigate = useNavigate();
  useEffect(() => {
    const checkRole = async () => {
      if (auth.roles !== Roles.nutritionist && auth.roles !== Roles.superuser) {
        await reSignOut();
      }
    };
    const checkAuth = async () => {
      if (auth.user !== 0 && !auth?.user) {
        await reSignOut();
      }
    };
    checkAuth();
    checkRole();
  }, [auth.user, auth.roles, reSignOut]);

  const [isSidebarOpen, toggle] = useToggle(false);
  const [isCollapse, Collapse] = useToggle(false);

  // VALIDATE IF THE NUTRITIONIST'S ACCOUNTS IS VERIFIED
  const { data } = API.Setup.ProfessionValidtion.GetByUser(Number(auth?.user));

  useEffect(() => {
    const checkVerified = () => {
      if (!Boolean(data?.IsValidated ?? true))
        navigate(RouteChannel.NUTRITIONIST_ON_HOLD);
    };
    checkVerified();
  }, [data?.IsValidated]);

  return (
    <>
      <S.Container className={ClassName}>
        <S.Content>
          <S.Nav
            className="hide-on-small border-r"
            $isCollapse={isCollapse}
            $isSidebarOpen={isSidebarOpen}
          >
            <SideNav Toggle={toggle} Collapse={isCollapse} />
          </S.Nav>
          <S.Main $isCollapse={isCollapse}>
            <Header Toggle={toggle} Collapse={Collapse} />
            <S.MainContent>
              <Outlet />
              <PageFooter />
            </S.MainContent>
          </S.Main>
        </S.Content>
      </S.Container>
    </>
  );
};
