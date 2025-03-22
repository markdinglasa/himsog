import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import { FeedbackEmail } from "../../../DataDisplay";
import Professions from "../../../DataDisplay/Professions";
import Certificates from "../../../DataDisplay/Certificates";
import Institutes from "../../../DataDisplay/Institutes";
export const ProfessionPanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="w-full">
          <S.Divider className="w-full mb-[1rem]">
            <Professions />
          </S.Divider>
          <S.Divider className="w-full mb-[1rem]">
            <Institutes />
          </S.Divider>
          <S.Divider className="w-full mb-[1rem]">
            <Certificates />
          </S.Divider>

          <S.Divider>
            <FeedbackEmail />
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(ProfessionPanel);
