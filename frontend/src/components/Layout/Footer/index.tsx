import { SFC } from "../../../types";
import * as S from "./Styles";
import { APP_VERSION } from "../../../constants";

export const PageFooter: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={ClassName}>
        <S.LeftContent>HIMSOG &copy; {new Date().getFullYear()}</S.LeftContent>
        <S.RightContent>HIMSOG v{APP_VERSION}</S.RightContent>
      </S.Container>
    </>
  );
};
