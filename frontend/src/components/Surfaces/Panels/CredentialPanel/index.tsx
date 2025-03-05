import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import Card from "../../Cards";
import Form from "../../Forms";
import { FeedbackEmail } from "../../../DataDisplay";

export const CredentialPanel: SFC = ({ ClassName }) => {
  // console.log(user);
  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="w-full">
          <S.Divider className="w-full border-b mb-2">
            <Card.Profile ClassName="" />
          </S.Divider>
          <S.Divider className="w-full">
            <Form.Setup.User IsDetails={true} Title="Account Details" />
          </S.Divider>
          <S.Divider className="w-full">
            <FeedbackEmail />
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(CredentialPanel);
