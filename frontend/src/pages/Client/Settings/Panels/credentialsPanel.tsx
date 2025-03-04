import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import Card from "../../../../components/Surfaces/Cards";

export const CredentialPanel: SFC = ({ ClassName }) => {
  // console.log(user);
  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="w-full">
          <S.Divider className="w-full border-red">
            <Card.Profile ClassName="mb-2" />
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(CredentialPanel);
