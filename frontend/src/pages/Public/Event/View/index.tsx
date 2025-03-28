import { Roles, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { useAuth } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { cn, renderPath } from "../../../../utils";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../modals";
import UIcon from "@mdi/react";
import { mdiAlertOutline, mdiThumbUpOutline } from "@mdi/js";
import Form from "../../../../components/Surfaces/Forms";
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

  const [isDisplay, toggleDisplay] = useToggle(false);
  const [modIndex, setModIndex] = useState<number>(0);

  return (
    <>
      <S.Container className={cn("flex justify-center mb-10 ", ClassName)}>
        <S.Content className="h-full flex flex-col justify-center items-center w-full md:w-11/12 mt-10 border-red">
          {/*<S.Divider className="h-32 w-full relative mb-5 items-center justify-center flex bg-white">
            <S.Span className="text-md uppercase font-medium">
              Commercial Space for Lease
            </S.Span>
          </S.Divider>*/}
          <S.Divider className="border-b flex justify-start items-start w-full mb-10">
            <Events />
          </S.Divider>
        </S.Content>
      </S.Container>
      <CustomModal
        ClassName="w-[90vw] md:w-[500px]"
        close={toggleDisplay}
        title={"Request Access"}
        open={isDisplay}
      >
        <S.Divider className="flex flex-col items-start justify-start mb-4">
          <S.Span className="text-lg font-medium">
            Please provide your organization email
          </S.Span>
          <S.Span className="text-sm text-slate-600">
            Only authorized government health establishments are allowed to post
            event or article.
          </S.Span>
        </S.Divider>
        <S.Divider className="w-full">
          <Form.Public.RequestAccess OnClose={toggleDisplay} />
        </S.Divider>
      </CustomModal>
      <CustomModal
        ClassName="w-[90vw] md:w-[500px]"
        close={() => {
          setModIndex(0);
          toggleDisplay();
        }}
        title={""}
        open={modIndex > 0}
      >
        {modIndex === 1 ? (
          <S.Divider className="flex flex-col items-center justify-center ">
            <S.Divider className="relative p-2 mb-2">
              <UIcon
                path={mdiThumbUpOutline}
                className="w-[5rem] h-[5rem] text-primary"
              />
            </S.Divider>
            <S.Divider className="w-full flex flex-col item-center justify-center text-center mb-5">
              <S.Span className="text-bold text-lg">
                Email is authorized!
              </S.Span>
              <S.Span className="text-sm text-slate-600">
                An access link has been sent to your email. This link is valid
                for one-time access only.
              </S.Span>
            </S.Divider>
          </S.Divider>
        ) : (
          <>
            <S.Divider className="flex flex-col items-center justify-center ">
              <S.Divider className="relative p-2 mb-2">
                <UIcon
                  path={mdiAlertOutline}
                  className="w-[5rem] h-[5rem] text-red-300"
                />
              </S.Divider>
              <S.Divider className="w-full flex flex-col item-center justify-center text-center mb-5">
                <S.Span className="text-bold text-lg">Access Denied</S.Span>
                <S.Span className="text-sm text-slate-600 mb-2">
                  Your email is not authorized to post events or artiles. Please{" "}
                  <S.Span className="text-sm text-blue-600">
                    contact the admin
                  </S.Span>{" "}
                  for verification.
                </S.Span>
                <S.Span
                  className="text-sm text-blue-600 cursor-pointer"
                  onClick={() => setModIndex(0)}
                >
                  Try again
                </S.Span>
              </S.Divider>
            </S.Divider>
          </>
        )}
      </CustomModal>
    </>
  );
};

export default memo(PublicEventPage);
