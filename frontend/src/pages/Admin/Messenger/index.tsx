import { SFC } from "../../../types";
import * as S from "../../../styles";
import { memo } from "react";

export const Messenger: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={ClassName}>Messenger</S.Container>
    </>
  );
};

export default memo(Messenger);
