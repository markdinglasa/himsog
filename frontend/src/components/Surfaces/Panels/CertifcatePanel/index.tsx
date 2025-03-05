import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import Certificates from "../../../DataDisplay/Certificates";
import { FeedbackEmail } from "../../../DataDisplay";
export const CertificatePanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="w-full">
          <S.Divider>
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
export default memo(CertificatePanel);
