import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import Form from "../../Forms";
import { FeedbackEmail } from "../../../DataDisplay";
export const ProfessionPanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="w-full">
          <S.Divider>
            <Form.Setup.Profession
              IsSetup={false}
              IsDetails={true}
              IsRedirect={false}
              Title="Profession Info"
            />
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
