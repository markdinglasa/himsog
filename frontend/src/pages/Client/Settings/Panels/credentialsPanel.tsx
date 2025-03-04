import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import Card from "../../../../components/Surfaces/Cards";
import API from "../../../../hooks/api";
import { useAuth } from "../../../../hooks";
export const CredentialPanel: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const { data: user } = API.Setup.User.Get(auth?.user ?? 0);
  console.log(user);
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
