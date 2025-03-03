import { Form, Formik } from "formik";
import {
  AutoComplete,
  CustomButton,
  CustomInput,
  Skeleton,
} from "../../../../../components";
import {
  ButtonType,
  CivilStatus,
  InputType,
  SFC,
  ToastType,
  UserRole,
  UserTable,
} from "../../../../../types";
import { memo } from "react";
import { Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { displayToast, formatDateForInput } from "../../../../../utils";
import { userValidator } from "../../../../../validators/";
import { CivilStatusOptions } from "../../../../../shared/data/options";
import API from "../../../../../hooks/api";

const UserForm: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const { update } = API.Setup.User.Update(true);
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
      <S.Content className="flex justify-center items-center w-full ">
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
                  }) =>
                    !isLoading ? (
                      <Form>
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-2">
                          <S.Divider className="w-full py-1">
                            <CustomInput
                              errors={errors}
                              type={InputType.text}
                              label="First Name"
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
                            value={values?.ContactNumber.toString()}
                            placeholder="+63 9XX-XXX-XXXX"
                            name="ContactNumber"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full flex justify-end items-center">
                          <CustomButton
                            text="Next"
                            ClassName=""
                            disabled={!isValid || isSubmitting}
                            type={ButtonType.submit}
                            morph={false}
                          />
                        </S.Divider>
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
