import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";

export const SubscriptionPanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("", ClassName)}>Subscriptions</S.Container>
    </>
  );
};
export default memo(SubscriptionPanel);
