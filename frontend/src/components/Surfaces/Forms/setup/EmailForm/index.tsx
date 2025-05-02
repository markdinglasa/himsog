import {
  ButtonColor,
  ButtonType,
  FormProps,
  InputType,
  SFC,
  ToastType,
  UserEmail,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { CircleButton, CustomButton, CustomInput } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { memo, useMemo, useState } from "react";
import { useAuth } from "../../../../../hooks";
import { userEmailValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";

export const EmailForm: SFC<FormProps> = ({
  ClassName,
  Title,
  IsDetails = true,
  OnClose,
}) => {
  const [IsEdit, SetIsEdit] = useState(IsDetails);
  const { auth } = useAuth();
  const Id: number = useMemo(() => Number(auth?.user ?? 0), [auth?.user]);
  const { update } = API.Setup.User.UpdateEmail();

  const InitialValues: UserEmail = {
    Email: "",
    Password: "",
  };

  const handleSubmit = async (values: UserEmail) => {
    try {
      if (Id) update(Number(Id), values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    } finally {
      OnClose && OnClose();
    }
  };

  return (
    <>
      <S.Container className={cn("w-full mt-2", ClassName)}>
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
              validationSchema={userEmailValidator}
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
                  <S.Divider className="w-full mb-2">
                    <CustomInput
                      placeholder="Current Password"
                      label="Current Password"
                      name="Password"
                      errors={errors}
                      touched={touched}
                      value={values.Password}
                      onChange={handleChange}
                      disabled={IsEdit}
                      onBlur={handleBlur}
                      type={InputType.password}
                    />
                  </S.Divider>
                  <S.Divider className="w-full mb-2">
                    <CustomInput
                      placeholder="e.g. juandela_cruz@hotmail.com"
                      label="New Email"
                      name="Email"
                      errors={errors}
                      touched={touched}
                      value={values.Email}
                      onChange={handleChange}
                      disabled={IsEdit}
                      onBlur={handleBlur}
                      type={InputType.text}
                    />
                  </S.Divider>
                  <AccessControl OtherCondition={!IsEdit}>
                    <S.Divider className="w-full flex justify-end items-center gap-4 ">
                      <CustomButton
                        leftIcon={<Icon.Cancel className="text-primary" />}
                        text="Cancel"
                        onClick={() => {
                          if (IsDetails) SetIsEdit(true);
                          resetForm();
                          OnClose && OnClose();
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
    </>
  );
};
export default memo(EmailForm);
