/*import {
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
import {
  AutoComplete,
  CircleButton,
  CustomButton,
  CustomInput,
} from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { userValidator } from "../../../../../validators";
import { IsBoolean, cn, displayToast } from "../../../../../utils";
import {
  useAuth,
} from "../../../../../hooks";
import { useParams } from "react-router-dom";
import { Skeleton } from "../../../../Feedback";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { CivilStatusOptions } from "../../../../../shared/data/options";

export const UserForm: SFC<FormProps> = ({
  ClassName,
  Title = "NA",
  IsDetails = true,
}) => {
  const [IsEdit, SetIsEdit] = useState(IsDetails);
  const { Id } = useParams<{ Id: string }>();
  //const { records, loading } = useGetUser(Number(Id ?? 0));
  //const { update } = useUpdateUser();
  //const { add } = useAddUser();
  const { auth } = useAuth();
  //const flag: boolean = IsDetails ? Id !== "" && loading : false;

  const InitialValues = {
    UpdatedBy: IsDetails ? (auth?.user ?? 0) : null,
    CreatedBy: IsDetails ? records?.CreatedBy : (auth?.user ?? 0),
    Email: records?.Email || "",
    Password: "",
    Firstname: records?.Firstname || "",
    Middlename: null,
    Lastname: records?.Lastname || "",
    ContactNumber: records?.ContactNumber || "",
    Role: records?.Role || UserRole.DEFAULT,
    CivilStatus: records?.CivilStatus || CivilStatus.DEFAULT,
    ProfilePhoto: records?.ProfilePhoto || null,
    IsSuspended: IsBoolean(records?.IsSuspended) || false,
    BirthDate: records?.BirthDate || "",
  };

  const handleSubmit = async (values: UserTable) => {
    try {
      //if (Id) await update(Id, values);
      //else await add(values);
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
                  handleBlur,
                  setTouched,
                }) => (
                  <Form>
                    <S.Divider className="w-full flex md:flex-row flex-col md:gap-2">
                      <S.Divider className="w-full py-1">
                        <CustomInput
                          errors={errors}
                          disabled={IsEdit}
                          type={InputType.text}
                          value={values.Firstname}
                          label="First Name"
                          placeholder="First Name"
                          name="Firstname"
                          touched={touched}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </S.Divider>
                      <S.Divider className="w-full py-1">
                        <CustomInput
                          errors={errors}
                          disabled={IsEdit}
                          type={InputType.text}
                          label="Last Name"
                          placeholder="Last Name"
                          name="Lastname"
                          value={values.Lastname}
                          touched={touched}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </S.Divider>
                    </S.Divider>
                    <S.Divider className="w-full pt-1">
                      <CustomInput
                        errors={errors}
                        disabled={IsEdit}
                        type={InputType.date}
                        label="Birth Date"
                        placeholder="BirthDate"
                        name="BirthDate"
                        value={values.BirthDate}
                        touched={touched}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </S.Divider>
                    <S.Divider className="w-full pb-1">
                      <AutoComplete
                        Label="Civil Status"
                        IsEdit={IsEdit}
                        Values={values.CivilStatus}
                        Options={CivilStatusOptions}
                        Name="CivilStatus"
                        OptionName="label"
                        Placeholder="Civil Status"
                        OnChange={(_: any, value: any) => {
                          setFieldValue("CivilStatus", value?.Id || "");
                          console.log("CivilStatus:", value?.Id);
                          setTouched({ CivilStatus: true });
                        }}
                        Errors={errors}
                        Touched={touched}
                      />
                    </S.Divider>
                    <S.Divider className="w-full py-1">
                      <CustomInput
                        errors={errors}
                        disabled={IsEdit}
                        type={InputType.text}
                        label="Mobile Number"
                        placeholder="+63 9XX-XXX-XXXX"
                        name="ContactNumber"
                        value={values.ContactNumber}
                        touched={touched}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </S.Divider>
                    <S.Divider className="w-full py-1">
                      <CustomInput
                        errors={errors}
                        disabled={IsEdit}
                        type={InputType.email}
                        label="Email"
                        placeholder="Email"
                        name="Email"
                        value={values.Email}
                        touched={touched}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </S.Divider>
                    <S.Divider className="w-full flex md:flex-row flex-col gap-2">
                      <S.Divider className="w-full md:w-1/2"></S.Divider>
                    </S.Divider>
                    {!IsEdit && (
                      <S.Divider className="w-full flex justify-end pt-2 pb-1 items-center border-t gap-2 mt-2">
                        <CustomButton
                          leftIcon={<CancelIcon className="text-primary" />}
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
*/
