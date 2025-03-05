import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";

export const SecurityPanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("", ClassName)}>Security Panel</S.Container>
    </>
  );
};
export default memo(SecurityPanel);
