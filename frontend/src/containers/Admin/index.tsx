import { Outlet } from "react-router-dom";
import { SFC } from "../../types";
import { PageFooter, SideNav, Header } from "../../components";
import { useToggle } from "../../hooks";
import * as S from "./Styles";

export const AdminLayout: SFC = ({ ClassName }) => {
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
