import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import { FeedbackEmail } from "../../../DataDisplay";
import Form from "../../Forms";
import { CustomButton } from "../../../Inputs";
import Icon from "../../../../constants/icon";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../modals";

export const SecurityPanel: SFC = ({ ClassName }) => {
  const [isEmail, toggleEmail] = useToggle(false);
  const [isPassword, togglePassword] = useToggle(false);
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.Content className="w-full">
          <S.Divider className="mb-3">
            <S.Divider className="flex flex-col mb-3">
              <S.Span className="text-lg font-medium">Contact info</S.Span>
              <S.Span className="text-sm text-slate-600">
                Manage the email addresses associated with your Himsog Account.
              </S.Span>
            </S.Divider>
            <S.Divider>
              <CustomButton
                leftIcon={<Icon.Email className="text-white" />}
                text="Change Email"
                onClick={toggleEmail}
                morph={false}
              />
            </S.Divider>
          </S.Divider>
          <S.Divider>
            <S.Divider className="flex flex-col mb-3">
              <S.Span className="text-lg font-medium">Password</S.Span>
              <S.Span className="text-sm text-slate-600">
                A secure password helps protect your Himsog account.
              </S.Span>
            </S.Divider>
            <S.Divider>
              <CustomButton
                leftIcon={<Icon.Password className="text-white" />}
                text="Change Password"
                onClick={togglePassword}
                morph={false}
              />
            </S.Divider>
          </S.Divider>
          <S.Divider>
            <FeedbackEmail />
          </S.Divider>
        </S.Content>
      </S.Container>
      <CustomModal
        close={toggleEmail}
        title={"Change Email"}
        open={isEmail}
        ClassName="md:w-[30rem] w-[80vw]"
      >
        <Form.Setup.EmailForm IsDetails={false} OnClose={toggleEmail} />
      </CustomModal>
      <CustomModal
        close={togglePassword}
        title="Change Password"
        open={isPassword}
        ClassName="md:w-[30rem] w-[80vw]"
      >
        <Form.Setup.PasswordForm IsDetails={false} OnClose={togglePassword} />
      </CustomModal>
    </>
  );
};
export default memo(SecurityPanel);
