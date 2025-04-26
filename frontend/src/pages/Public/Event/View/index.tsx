import { Roles, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { useAuth } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";
import { cn, renderPath } from "../../../../utils";
import Events from "../../../../components/DataDisplay/Events";

const PublicEventPage: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.user) {
      const path = renderPath(auth?.roles ?? Roles.default);
      navigate(path);
    }
  }, [auth]);

  return (
    <>
      <S.Container className={cn("flex justify-center mb-10 ", ClassName)}>
        <S.Content className="h-full flex flex-col justify-center items-center w-full md:w-11/12 mt-10 ">
          {/*<S.Divider className="h-32 w-full relative mb-5 items-center justify-center flex bg-white">
            <S.Span className="text-md uppercase font-medium">
              Commercial Space for Lease
            </S.Span>
          </S.Divider>*/}
          <S.Divider className="border-b flex justify-start items-start w-full mb-10">
            <Events IsPublic={true} IsDisplay={true} />
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(PublicEventPage);
