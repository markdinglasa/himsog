import { Outlet } from "react-router-dom";
import { SFC } from "../../types";
import { PublicFooter, PublicHeader } from "../../components";
import * as S from "./Styles";

export const PublicLayout: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={ClassName}>
        <S.Content>
          <S.Main className="bg-slate-100">
            <PublicHeader />
            <S.MainContent>
              <Outlet />
              <PublicFooter />
            </S.MainContent>
          </S.Main>
        </S.Content>
      </S.Container>
    </>
  );
};
