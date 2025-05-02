import { SFC } from "../../../types";
import * as S from "../../../styles";
import { cn } from "../../../utils";
import { memo } from "react";

const PublicFAQsPage: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container
        className={cn(
          "h-[calc(100vh-200px)] flex items-center justify-center",
          ClassName,
        )}
      >
        FAQs
      </S.Container>
    </>
  );
};

export default memo(PublicFAQsPage);
