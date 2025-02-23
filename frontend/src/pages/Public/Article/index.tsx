import { SFC } from "../../../types";
import * as S from "../../../styles";

export const PublicArticlePage: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={ClassName}>Article</S.Container>
    </>
  );
};
