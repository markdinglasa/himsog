import {
  ButtonColor,
  ButtonType,
  DialogType,
  FormProps,
  InputType,
  SFC,
  ToastType,
  UserPassword,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { CircleButton, CustomButton, CustomInput } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { memo, useMemo, useState } from "react";
import { useAuth, useSignOut, useToggle } from "../../../../../hooks";
import { userPasswordValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { ConfirmationDialog } from "../../../../Feedback";

export const PasswordForm: SFC<FormProps> = ({
  ClassName,
  Title,
  OnClose,
  IsDetails = true,
}) => {
  const [IsEdit, SetIsEdit] = useState(IsDetails);
  const { auth } = useAuth();
  const Id: number = useMemo(() => Number(auth?.user ?? 0), [auth?.user]);
  const { update } = API.Setup.User.UpdatePassword();
  const { reSignOut } = useSignOut();
  const InitialValues: UserPassword = {
    Password: "",
    ConfirmPassword: "",
    CurrentPassword: "",
  };

  const handleSubmit = async (values: UserPassword) => {
    try {
      if (Id) update(Number(Id), values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    } finally {
      OnClose && OnClose();
    }
  };
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="content">
          <S.Divider className="flex flex-row items-center justify-between">
            <AccessControl OtherCondition={Title !== null}>
              <S.Span className="text-lg font-medium">{Title}</S.Span>
            </AccessControl>
            <S.Divider>
              <AccessControl OtherCondition={IsEdit}>
                <CircleButton
                  OnClick={() => SetIsEdit(false)}
                  Icon={<Icon.Edit className="text-primary" />}
                  Type={ButtonType.button}
                />
              </AccessControl>
            </S.Divider>
          </S.Divider>

          <S.Divider>
            <Formik
              initialValues={InitialValues}
              onSubmit={handleSubmit}
              enableReinitialize={true}
              validateOnMount={true}
              validationSchema={userPasswordValidator}
            >
              {({
                errors,
                touched,
                isValid,
                isSubmitting,
                handleChange,
                dirty,
                values,
                resetForm,
                handleBlur,
              }) => (
                <Form>
                  <S.Divider className="w-full flex flex-col gap-3">
                    <S.Divider className="w-full">
                      <CustomInput
                        placeholder="Current Password"
                        label="Current Password"
                        name="CurrentPassword"
                        errors={errors}
                        touched={touched}
                        value={values.CurrentPassword}
                        onChange={handleChange}
                        disabled={IsEdit}
                        type={InputType.password}
                        onBlur={handleBlur}
                      />
                    </S.Divider>
                    <S.Divider className="w-full">
                      <CustomInput
                        placeholder="New Password"
                        label="New Password"
                        name="Password"
                        errors={errors}
                        touched={touched}
                        value={values.Password}
                        onChange={handleChange}
                        disabled={IsEdit}
                        type={InputType.password}
                        onBlur={handleBlur}
                      />
                    </S.Divider>
                    <S.Divider className="w-full">
                      <CustomInput
                        placeholder="Confirm Password"
                        label="Confirm Password"
                        name="ConfirmPassword"
                        errors={errors}
                        touched={touched}
                        value={values.ConfirmPassword}
                        onChange={handleChange}
                        disabled={IsEdit}
                        onBlur={handleBlur}
                        type={InputType.password}
                      />
                    </S.Divider>
                  </S.Divider>
                  <AccessControl OtherCondition={true}>
                    <S.Divider className="w-full flex justify-end items-center gap-4 mt-2">
                      <CustomButton
                        leftIcon={<Icon.Cancel className="text-primary" />}
                        text="Cancel"
                        onClick={() => {
                          if (IsDetails) SetIsEdit(true);
                          OnClose && OnClose();
                          resetForm();
                        }}
                        color={ButtonColor.default}
                        type={ButtonType.button}
                      />
                      <CustomButton
                        leftIcon={
                          <SaveIcon className="text-primary md:text-white" />
                        }
                        disabled={!dirty || !isValid || isSubmitting}
                        text="Save"
                        type={ButtonType.button}
                        onClick={toggleDisplay}
                      />
                    </S.Divider>
                    <S.Divider className="hidden">
                      <CustomButton
                        id="submit-button"
                        disabled={!dirty || !isValid || isSubmitting}
                        text="Save"
                        type={ButtonType.submit}
                      />
                    </S.Divider>
                  </AccessControl>
                </Form>
              )}
            </Formik>
          </S.Divider>
        </S.Content>
      </S.Container>
      <ConfirmationDialog
        ClassName="md:w-[500px]"
        title="Account Security"
        message="For security reasons, your account will be logged out after changing your password. Please sign in again to continue."
        open={isDisplay}
        close={toggleDisplay}
        confirm={() => {
          document.getElementById("submit-button")?.click();
          reSignOut();
        }}
        dialogType={DialogType.confirm}
      />
    </>
  );
};
export default memo(PasswordForm);
