import { Form, Formik } from "formik";
import { AutoComplete, CustomButton, CustomInput } from "../../../components";
import {
  APIChannel,
  ButtonColor,
  ButtonType,
  CivilStatus,
  InputType,
  LoginTable,
  Roles,
  RouteChannel,
  SFC,
  ToastType,
  UserRole,
  UserTable,
} from "../../../types";
import { useEffect, useState } from "react";
import axios from "axios";
import GoogleLogo from "../../../asset/images/google-logo.png";
import { useNavigate } from "react-router-dom";
import { BASE_URL, Error, loginFormValues } from "../../../shared";
import { useAuth } from "../../../hooks";
import * as S from "../../../styles";

import Logo from "../../../asset/svg/logo.svg";
import { cn, displayToast, renderPath } from "../../../utils";
import { registerValidator } from "../../../validators/";
import { CivilStatusOptions } from "../../../shared/data/options";

const PublicSignUpPage: SFC = ({ ClassName }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    if (auth?.user) {
      const path = renderPath(auth?.roles ?? Roles.default);
      navigate(path);
    }
  }, [auth]);

  const InitialValues: UserTable = {
    Email: "",
    Password: "",
    Firstname: "",
    Middlename: null,
    Lastname: "",
    ContactNumber: "",
    Role: UserRole.CLIENT,
    CivilStatus: CivilStatus.DEFAULT,
    ProfilePhoto: null,
    IsSuspended: false,
    BirthDate: "",
  };

  const handleSubmit = async (values: loginFormValues): Promise<void> => {
    const data: LoginTable = { ...values };
    try {
      const response = await axios.post(
        `${BASE_URL}${APIChannel.USER_REGISTER}`,
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        },
      );
      if (response.data.data) {
        displayToast("New account created", ToastType.success);
        navigate(RouteChannel.SIGN_IN, { replace: true });
      } else setErrorMessage(Error.m00019);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || Error.m00003);
    }
  };

  return (
    <S.Container
      className={cn(
        `w-full bg-slate-100 h-full items-center flex justify-center`,
        ClassName,
      )}
    >
      <S.Content className="flex justify-center items-center w-full ">
        <S.Divider className="flex  w-full  justify-center items-center ">
          <S.Divider className="md:w-[450px] w-full border border-slate-300 p-3 bg-slate-50">
            {errorMessage && (
              <S.Divider className="text-center w-full mb-2">
                <S.Span className="p-3 text-red-500 text-center text-[14px]">
                  {errorMessage}
                </S.Span>
              </S.Divider>
            )}

            <S.Divider className="w-full">
              <S.Divider className="w-full flex items-center justify-center mb-2">
                <S.Image src={Logo} className="w-full h-12" alt="himsog-logo" />
              </S.Divider>
              <S.Divider className="w-full text-center mb-2 font-semibold">
                Create an account
              </S.Divider>
              <S.Divider className="mb-5">
                <Formik
                  initialValues={InitialValues}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                  validateOnMount={true}
                  validationSchema={registerValidator}
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
                  }) => (
                    <Form>
                      <S.Divider className="w-full flex md:flex-row flex-col md:gap-2">
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
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
                            type={InputType.text}
                            label="Last Name"
                            placeholder="Last Name"
                            name="Lastname"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                      </S.Divider>
                      <S.Divider className="w-full pt-1">
                        <CustomInput
                          errors={errors}
                          type={InputType.date}
                          label="Birth Date"
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
                          type={InputType.text}
                          label="Mobile Number"
                          placeholder="+63 9XX-XXX-XXXX"
                          name="ContactNumber"
                          touched={touched}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </S.Divider>
                      <S.Divider className="w-full py-1">
                        <CustomInput
                          errors={errors}
                          type={InputType.email}
                          label="Email"
                          placeholder="Email"
                          name="Email"
                          touched={touched}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </S.Divider>
                      <S.Divider className="w-full">
                        <CustomInput
                          ClassName="text-zinc-900"
                          errors={errors}
                          type={InputType.password}
                          label="Password"
                          placeholder="Password"
                          name="Password"
                          touched={touched}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </S.Divider>
                      <S.Divider className="w-full">
                        <S.Span className="text-[12px]">
                          By clicking sign up, you aggree to our{" "}
                          <S.Span
                            onClick={() =>
                              navigate(RouteChannel.TERMS_AND_CONDITIONS)
                            }
                            className="text-primary cursor-pointer"
                          >
                            Terms of Service
                          </S.Span>{" "}
                          and{" "}
                          <S.Span
                            onClick={() =>
                              navigate(RouteChannel.PRIVACY_POLICY)
                            }
                            className="text-primary cursor-pointer"
                          >
                            Privacy Policy
                          </S.Span>
                        </S.Span>
                      </S.Divider>
                      <CustomButton
                        text="Sign Up"
                        ClassName="w-full"
                        disabled={isSubmitting}
                        type={ButtonType.submit}
                        morph={false}
                      />
                    </Form>
                  )}
                </Formik>
              </S.Divider>
              <S.Divider className="border-b-2 h-2 flex items-center justify-center w-full mb-5">
                <span className="text-sm text-slate-700 mt-2 bg-white text-[14px] ">
                  Or
                </span>
              </S.Divider>
              <S.Divider className="w-full ">
                <CustomButton
                  leftIcon={<S.Image src={GoogleLogo} className="w-6 h-6" />}
                  text="Continue with Google"
                  ClassName="w-full border"
                  color={ButtonColor.default}
                  type={ButtonType.submit}
                  morph={false}
                />
              </S.Divider>
              <S.Divider className="w-full flex flex-row items-center justify-center mt-3 py-3">
                <span className="text-slate-700 text-[14px] ">
                  Already have an account?
                </span>
                <span
                  className="ml-2 text-primary text-[14px] cursor-pointer"
                  onClick={() => navigate(RouteChannel.SIGN_IN)}
                >
                  Sign In
                </span>
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Divider>
      </S.Content>
    </S.Container>
  );
};

export default PublicSignUpPage;
