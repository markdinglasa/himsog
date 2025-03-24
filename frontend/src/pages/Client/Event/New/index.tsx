import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { PageBreadCrumbs } from "../../../../components";
import { cn } from "../../../../utils";
import { memo } from "react";

export const EventNewPage: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={[]} Active="New Event" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Content className="">New Event </S.Content>
      </S.Container>
    </>
  );
};
export default memo(EventNewPage);
