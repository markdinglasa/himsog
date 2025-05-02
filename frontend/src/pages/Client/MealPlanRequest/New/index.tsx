import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { PageBreadCrumbs } from "../../../../components";
import { cn } from "../../../../utils";
import { memo } from "react";

export const MealPlanRequestNewPage: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={[]} Active="New Meal Plan - Request" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Content className="">New Meal Plan Request</S.Content>
      </S.Container>
    </>
  );
};
export default memo(MealPlanRequestNewPage);
