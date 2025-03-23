import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";

export const MealPlanPanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("w-full ", ClassName)}>
        <S.Content className="w-full">
          <S.Divider className="w-full ">Meal Plan</S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(MealPlanPanel);
