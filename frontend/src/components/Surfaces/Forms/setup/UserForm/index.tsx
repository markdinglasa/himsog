import {
  ButtonColor,
  ButtonType,
  FormProps,
  InputType,
  SFC,
  ToastType,
  UserTable,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import {
  AutoComplete,
  CircleButton,
  CustomButton,
  Input,
} from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { userValidator } from "../../../../../validators";
import { cn, displayToast } from "../../../../../utils";
import {
  useAddUser,
  useAuth,
  useGetUser,
  useUpdateUser,
} from "../../../../../hooks";
import { useParams } from "react-router-dom";
import { Skeleton } from "../../../../Feedback";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

export const UserForm: SFC<FormProps> = ({
  ClassName,
  Title = "NA",
  IsDetails = true,
}) => {
  const [IsEdit, SetIsEdit] = useState(IsDetails);
  const { Id } = useParams<{ Id: string }>();
  const { records, loading } = useGetUser(Number(Id ?? 0));
  const { update } = useUpdateUser();
  const { add } = useAddUser();
  const { auth } = useAuth();
  const flag: boolean = IsDetails ? Id !== "" && loading : false;

  const InitialValues: UserTable = {
    UpdatedBy: IsDetails ? (auth?.user ?? 0) : null,
    CreatedBy: IsDetails ? records?.CreatedBy : (auth?.user ?? 0),
    Name: records?.Name || "",
    Username: records?.Username || "",
    Email: records?.Email || "",
    Password: "",
    RoleId: records?.RoleId || 0,
    CardNumber: records?.CardNumber || "",
  };

  const handleSubmit = async (values: UserTable) => {
    try {
      if (Id) await update(Id, values);
      else await add(values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    }
  };

  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="content">
          <S.FormHeader className="flex flex-row items-center justify-between">
            <S.Span className="text-lg text-slate-900">{Title}</S.Span>
            <S.Divider>
              <CircleButton
                OnClick={() => SetIsEdit(false)}
                Icon={<EditIcon className="text-primary" />}
                Type={ButtonType.button}
              />
            </S.Divider>
          </S.FormHeader>
          {!flag ? (
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
                  setFieldValue,
                  setTouched,
                }) => (
                  <Form>
                    <S.Divider className="w-full flex md:flex-row flex-col gap-2">
                      <S.Divider className="w-full md:w-1/2">
                        <Input
                          placeholder="e.g juandelacruz09"
                          label="Username"
                          name="Username"
                          errors={errors}
                          touched={touched}
                          value={values.Username}
                          onChange={handleChange}
                          disabled={IsEdit}
                          type={InputType.text}
                        />
                      </S.Divider>
                      <S.Divider className="w-full  md:w-1/2">
                        <Input
                          placeholder="e.g juandelacruz09@gmail.com"
                          label="Email"
                          name="Email"
                          errors={errors}
                          touched={touched}
                          value={values.Email}
                          onChange={handleChange}
                          disabled={IsEdit}
                          type={InputType.email}
                        />
                      </S.Divider>
                    </S.Divider>
                    <S.Divider className="w-full mb-2">
                      <Input
                        placeholder="e.g Juan Dela Cruz"
                        label="Name"
                        name="Name"
                        errors={errors}
                        touched={touched}
                        value={values.Name}
                        onChange={handleChange}
                        disabled={IsEdit}
                        type={InputType.text}
                      />
                    </S.Divider>
                    <S.Divider className="w-full flex md:flex-row flex-col gap-2">
                      <S.Divider className="w-full md:w-1/2">
                        <AutoComplete
                          Placeholder="Select Role"
                          Options={[]}
                          Name="RoleId"
                          OptionName="Name"
                          Label="Role"
                          IsEdit={IsEdit}
                          Values={values.RoleId}
                          Errors={errors}
                          Touched={touched}
                          OnChange={(_: any, value: { Id: any }) => {
                            setFieldValue("RoleId", value?.Id || 0);
                            setTouched({ RoleId: true });
                          }}
                        />
                      </S.Divider>
                      <S.Divider className="w-full  md:w-1/2">
                        <Input
                          placeholder="Card Number"
                          label="Card Number"
                          name="CardNumber"
                          errors={errors}
                          touched={touched}
                          value={values.CardNumber}
                          onChange={handleChange}
                          disabled={IsEdit}
                          type={InputType.password}
                        />
                      </S.Divider>
                    </S.Divider>
                    {!IsEdit && (
                      <S.Divider className="w-full flex justify-end pt-2 pb-1 items-center border-t gap-2 mt-2">
                        <CustomButton
                          icon={<CancelIcon className="text-primary" />}
                          text="Cancel"
                          onClick={() => {
                            if (IsDetails) SetIsEdit(true);
                            resetForm();
                          }}
                          color={ButtonColor.default}
                          type={ButtonType.button}
                        />
                        <CustomButton
                          icon={
                            <SaveIcon className="text-primary md:text-white" />
                          }
                          disabled={!dirty || !isValid || isSubmitting}
                          text="Save"
                          type={ButtonType.submit}
                        />
                      </S.Divider>
                    )}
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
