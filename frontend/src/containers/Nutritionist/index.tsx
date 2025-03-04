import { Outlet } from "react-router-dom";
import { Roles, SFC } from "../../types";
import { PageFooter, Header, NutritionistSideNav } from "../../components";
import { useAuth, useSignOut, useToggle } from "../../hooks";
import * as S from "./Styles";
import { useEffect } from "react";

export const NutritionistLayout: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const { reSignOut } = useSignOut();

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

  return (
    <>
      <S.Container className={ClassName}>
        <S.Content>
          <S.Nav
            className="hide-on-small "
            $isCollapse={isCollapse}
            $isSidebarOpen={isSidebarOpen}
          >
            <NutritionistSideNav Toggle={toggle} Collapse={isCollapse} />
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
