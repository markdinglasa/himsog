import { SFC } from "../../../types";
import * as S from "../../../styles";
import { cn } from "../../../utils";
import { memo } from "react";

const PublicPrivacyPolicyPage: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container
        className={cn(
          "h-[calc(100vh-200px)] flex items-center justify-center",
          ClassName,
        )}
      >
        Privacy Policy
      </S.Container>
    </>
  );
};

export default memo(PublicPrivacyPolicyPage);
