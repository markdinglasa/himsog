import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import { FeedbackEmail } from "../../../DataDisplay";

export const MedicalRecordsPanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.Content className="w-full">
          <S.Divider>medical records</S.Divider>
          <S.Divider>
            <FeedbackEmail />
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(MedicalRecordsPanel);
