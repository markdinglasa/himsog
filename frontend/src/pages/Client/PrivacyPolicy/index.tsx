import { SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { PageBreadCrumbs } from "../../../components";
import { cn } from "../../../utils";
import { memo } from "react";

export const PrivacyPolicy: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={[]} Active="Meal Plan - Request Details" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Content className="">Privacy Policy</S.Content>
      </S.Container>
    </>
  );
};
export default memo(PrivacyPolicy);
