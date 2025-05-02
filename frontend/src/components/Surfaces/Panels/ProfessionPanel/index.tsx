import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import Professions from "../../../DataDisplay/Professions";

export const ProfessionPanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("w-full ", ClassName)}>
        <S.Content className="w-full">
          <S.Divider className="w-full ">
            <Professions />
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(ProfessionPanel);
