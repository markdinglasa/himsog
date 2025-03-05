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
import { Skeleton } from "../../../../Feedback";
import { memo, useMemo, useState } from "react";
import { useAuth } from "../../../../../hooks";
import { userEmailValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";

export const EmailForm: SFC<FormProps> = ({
  ClassName,
  Title = "NA",
  IsDetails = true,
}) => {
  const [IsEdit, SetIsEdit] = useState(IsDetails);
  const { auth } = useAuth();
  const Id: number = useMemo(() => Number(auth?.user ?? 0), [auth?.user]);
  const { update } = API.Setup.User.UpdateEmail();
  const { data, isLoading } = API.Setup.User.Get(Id);

  const InitialValues: UserEmail = {
    Email: data?.Email || "",
  };

  const handleSubmit = async (values: UserEmail) => {
    try {
      if (Id) update(Number(Id), values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    }
  };

  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="content">
          <S.FormHeader className="flex flex-row items-center justify-between mb-4">
            <S.Span className="text-lg font-medium">{Title}</S.Span>
            <S.Divider>
              <AccessControl OtherCondition={IsDetails}>
                <CircleButton
                  OnClick={() => SetIsEdit(false)}
                  Icon={<Icon.Edit className="text-primary" />}
                  Type={ButtonType.button}
                />
              </AccessControl>
            </S.Divider>
          </S.FormHeader>
          {!isLoading ? (
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
                }) => (
                  <Form>
                    <S.Divider className="w-full mb-2">
                      <CustomInput
                        placeholder="juandela_cruz@hotmail.com"
                        label="Email"
                        name="Email"
                        errors={errors}
                        touched={touched}
                        value={values.Email}
                        onChange={handleChange}
                        disabled={IsEdit}
                        type={InputType.text}
                      />
                    </S.Divider>
                    <AccessControl OtherCondition={!IsEdit}>
                      <S.Divider className="w-full flex justify-end items-center border-t gap-4 mt-4 pt-4">
                        <CustomButton
                          leftIcon={<Icon.Cancel className="text-primary" />}
                          text="Cancel"
                          onClick={() => {
                            if (IsDetails) SetIsEdit(true);
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
                          type={ButtonType.submit}
                        />
                      </S.Divider>
                    </AccessControl>
                  </Form>
                )}
              </Formik>
            </S.Divider>
          ) : (
            <Skeleton />
          )}
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(EmailForm);
