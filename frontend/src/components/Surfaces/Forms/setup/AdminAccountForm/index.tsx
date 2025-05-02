import {
  ButtonColor,
  ButtonType,
  CivilStatus,
  FormProps,
  InputType,
  SFC,
  ToastType,
  UserRole,
  UserTable,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { CircleButton, CustomButton, CustomInput } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { memo, useState } from "react";
import { userValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";

export const AdminAccountForm: SFC<FormProps> = ({
  ClassName,
  Title,
  IsDetails = true,
  OnClose,
}) => {
  const [IsEdit, SetIsEdit] = useState(IsDetails);
  const { add } = API.Setup.User.Add();

  const InitialValues: UserTable = {
    Email: "",
    Password: "",
    Firstname: "New Admin",
    Middlename: null,
    Lastname: "Himsog",
    ContactNumber: "09000000000",
    Role: UserRole.ADMINISTRATOR,
    CivilStatus: CivilStatus.SINGLE,
    ProfilePhoto: null,
    IsSuspended: false,
    BirthDate: "2000-01-01",
    Gender: "male",
    Religion: "catholic",
  };

  const handleSubmit = async (values: UserTable) => {
    try {
      add(values);
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
          <S.Divider className="flex flex-row items-center justify-between mb-3">
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
              validationSchema={userValidator}
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
                      placeholder="e.g. juandela_cruz@hotmail.com"
                      label="Email"
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
export default memo(AdminAccountForm);
