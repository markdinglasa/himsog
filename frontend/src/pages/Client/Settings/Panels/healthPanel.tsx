import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";

export const HealthPanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("", ClassName)}>Diet & Nutrition</S.Container>
    </>
  );
};
export default memo(HealthPanel);
