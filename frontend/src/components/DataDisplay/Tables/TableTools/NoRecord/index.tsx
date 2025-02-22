import { mdiAlertCircleOutline } from "@mdi/js";
import { NoRecordProps, SFC } from "../../../../../types";
import * as S from "./Styles";
import { twMerge } from "tailwind-merge";
import { memo } from "react";

const NoRecord: SFC<NoRecordProps> = ({
  ClassName,
  Message,
  TextStyle,
  IconStyle,
}) => {
  return (
    <>
      <S.Container className={twMerge("w-full ", ClassName)}>
        <S.MessageContainer className={IconStyle}>
          <S.Icon path={mdiAlertCircleOutline} className="text-slate-200" />
          <S.Message className={TextStyle}>{Message}</S.Message>
        </S.MessageContainer>
      </S.Container>
    </>
  );
};

export default memo(NoRecord);
