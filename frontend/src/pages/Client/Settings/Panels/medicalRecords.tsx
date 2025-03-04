import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";

export const MedicalRecordsPanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("", ClassName)}>Medical Records</S.Container>
    </>
  );
};
export default memo(MedicalRecordsPanel);
