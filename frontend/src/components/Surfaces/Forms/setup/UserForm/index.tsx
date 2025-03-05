import { Form, Formik } from "formik";
import {
  AccessControl,
  AutoComplete,
  CircleButton,
  CustomButton,
  CustomInput,
  Skeleton,
} from "../../../../../components";
import {
  ButtonColor,
  ButtonType,
  CivilStatus,
  InputType,
  RouteChannel,
  SetupForm,
  SFC,
  ToastType,
  UserRole,
  UserTable,
} from "../../../../../types";
import { memo, useState } from "react";
import { Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { displayToast, formatDateForInput } from "../../../../../utils";
import { userValidator } from "../../../../../validators/";
import { CivilStatusOptions } from "../../../../../shared/data/options";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";

const UserForm: SFC<SetupForm> = ({
  ClassName,
  IsSetup = false,
  Redirect = RouteChannel.INDEX,
  IsDetails = false,
  IsRedirect = false,
  Title,
}) => {
  const [IsEdit, SetIsEdit] = useState<boolean>(IsDetails);
  const { auth } = useAuth();
  const { update } = API.Setup.User.Update(true, Redirect, IsRedirect);
  const { data, isLoading } = API.Setup.User.Get(auth?.user ?? 0);

  const InitialValues: UserTable = {
    Email: data?.Email || "",
    Password: data?.Password || "",
    Firstname: data?.Firstname || "",
    Middlename: data?.Middlename || null,
    Lastname: data?.Lastname || "",
    ContactNumber: data?.ContactNumber || "",
    Role: data?.Role || UserRole.CLIENT,
    CivilStatus: data?.CivilStatus || CivilStatus.DEFAULT,
    ProfilePhoto: data?.ProfilePhoto || null,
    IsSuspended: data?.IsSuspended || false,
    BirthDate: data?.BirthDate || "",
    Gender: data?.Gender || "",
  };
  // console.log("data:", data);
  const handleSubmit = async (values: UserTable): Promise<void> => {
    try {
      values.BirthDate =
        values?.BirthDate && formatDateForInput(new Date(values?.BirthDate));
      update(auth?.user, values);
    } catch (error: any) {
      displayToast(error.message || Error.m00001, ToastType.error);
    }
  };

  return (
    <S.Container className={ClassName}>
      <S.Content className="flex justify-center items-center w-full flex-col ">
        <S.FormHeader className="flex flex-row items-center justify-between ">
          <S.Span className="text-lg font-medium">{Title}</S.Span>
          <S.Divider>
            <AccessControl OtherCondition={IsEdit && IsDetails}>
              <CircleButton
                OnClick={() => SetIsEdit(false)}
                Icon={<Icon.Edit className="text-primary" />}
                Type={ButtonType.button}
              />
            </AccessControl>
          </S.Divider>
        </S.FormHeader>
        <S.Divider className="w-full text-left mb-3">
          <S.Span className="text-sm text-slate-600">
            Some info may be visible to other people using Himsog services.
            <S.Span className="text-blue-600"> Learn more.</S.Span>
          </S.Span>
        </S.Divider>
        <S.Divider className="flex  w-full  justify-center items-center ">
          <S.Divider className=" w-full">
            <S.Divider className="w-full">
              <S.Divider className="">
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
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    values,
                    setTouched,
                    isValid,
                    resetForm,
                  }) =>
                    !isLoading ? (
                      <Form>
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-2">
                          <S.Divider className="w-full py-1">
                            <CustomInput
                              errors={errors}
                              type={InputType.text}
                              label="First Name"
                              disabled={IsEdit}
                              value={values?.Firstname}
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
                              type={InputType.text}
                              label="Middle Name (Optional)"
                              disabled={IsEdit}
                              value={values?.Middlename ?? ""}
                              placeholder="Middle Name"
                              name="Middlename"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            label="Last Name"
                            disabled={IsEdit}
                            value={values.Lastname}
                            placeholder="Last Name"
                            name="Lastname"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full pt-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.date}
                            label="Birth Date"
                            disabled={IsEdit}
                            value={
                              String(values.BirthDate?.toString() ?? "").split(
                                "T",
                              )[0]
                            }
                            placeholder="BirthDate"
                            name="BirthDate"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full pb-1">
                          <AutoComplete
                            Label="Civil Status"
                            Values={values.CivilStatus}
                            Options={CivilStatusOptions}
                            IsEdit={IsEdit}
                            Name="CivilStatus"
                            OptionName="label"
                            Placeholder="Civil Status"
                            OnChange={(_: any, value: any) => {
                              setFieldValue("CivilStatus", value?.Id || "");
                              setTouched({ CivilStatus: true });
                            }}
                            Errors={errors}
                            Touched={touched}
                          />
                        </S.Divider>
                        <S.Divider className="w-full pb-1">
                          <AutoComplete
                            Label="Gender"
                            Values={values.Gender}
                            Options={[
                              { Id: "male", Label: "Male" },
                              { Id: "female", Label: "Female" },
                              { Id: "other", Label: "Other" },
                            ]}
                            Name="Gender"
                            IsEdit={IsEdit}
                            OptionName="Label"
                            Placeholder="Gender"
                            OnChange={(_: any, value: any) => {
                              setFieldValue("Gender", value?.Id || "");
                              setTouched({ Gender: true });
                            }}
                            Errors={errors}
                            Touched={touched}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            label="Mobile Number"
                            disabled={IsEdit}
                            value={values?.ContactNumber.toString()}
                            placeholder="+63 9XX-XXX-XXXX"
                            name="ContactNumber"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <AccessControl OtherCondition={IsSetup}>
                          <S.Divider className="w-full flex justify-end items-center">
                            <CustomButton
                              text="Next"
                              ClassName=""
                              disabled={!isValid || isSubmitting}
                              type={ButtonType.submit}
                              morph={false}
                            />
                          </S.Divider>
                        </AccessControl>
                        <AccessControl OtherCondition={!IsSetup && !IsEdit}>
                          <S.Divider className="w-full flex justify-end items-center gap-3">
                            <CustomButton
                              leftIcon={
                                <Icon.Cancel className="text-primary" />
                              }
                              text="Cancel"
                              ClassName=""
                              color={ButtonColor.default}
                              onClick={() => {
                                SetIsEdit(true);
                                resetForm();
                              }}
                              type={ButtonType.button}
                              morph={false}
                            />
                            <CustomButton
                              leftIcon={<Icon.Save />}
                              text="Save"
                              ClassName=""
                              disabled={!isValid || isSubmitting}
                              type={ButtonType.submit}
                              morph={false}
                            />
                          </S.Divider>
                        </AccessControl>
                      </Form>
                    ) : (
                      <Skeleton />
                    )
                  }
                </Formik>
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Divider>
      </S.Content>
    </S.Container>
  );
};

export default memo(UserForm);
