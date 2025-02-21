import { Form, Formik } from "formik";
import { CustomButton, CustomInput } from "../../components";
import {
  ButtonColor,
  ButtonType,
  InputType,
  LoginTable,
  Roles,
  RouteChannel,
  SFC,
  UserTable,
} from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { BASE_URL, Error, loginFormValues } from "../../shared";
import { useAuth } from "../../hooks";
import { loginValidator } from "../../validators";
import * as S from "../../styles";
import { cn } from "../../utils";
import { Checkbox, FormControlLabel } from "@mui/material";

export const PageLogin: SFC = ({ ClassName }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    if (auth?.user) navigate(RouteChannel.DASHBOARD);
  }, [auth]);

  const InitialValues: LoginTable = {
    Email: "",
    Password: "",
  };

  const handleSubmit = async (values: loginFormValues): Promise<void> => {
    const data: LoginTable = { ...values };
    try {
      const response = await axios.post(`${BASE_URL}/auth/jwt-login`, data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      //console.log(response);
      if (response.data.data.Success) {
        const user: UserTable = response.data.data.User;
        const roles: Roles = response.data.data.Role;
        const accessToken: string = response.data.data.AccessToken;
        const refreshToken: string = response.data.data.RefreshToken;
        setAuth({
          user,
          roles,
          accessToken,
          refreshToken,
        });
        navigate(RouteChannel.DASHBOARD, { replace: true });
      } else setErrorMessage(Error.m00019);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || Error.m00019);
    }
  };

  return (
    <S.Container
      className={cn(
        `w-screen bg-slate-100 h-screen items-center flex justify-center`,
        ClassName,
      )}
    >
      <S.Content className="flex justify-center items-center  w-full">
        <S.Divider className="flex  w-full md:w-[90vw] p-3 gap-5 justify-center items-center">
          <S.Divider className="md:w-[450px] w-full border border-slate-300 p-3 bg-white">
            {errorMessage && (
              <S.Divider className="text-center w-full mb-2">
                <S.Span className="p-3 text-red-500 text-center text-[14px]">
                  {errorMessage}
                </S.Span>
              </S.Divider>
            )}

            <S.Divider className="w-full">
              <S.Divider className="w-full flex items-center justify-center mb-2">
                <S.Image src="" className="w-full h-12" alt="himsog-logo" />
              </S.Divider>
              <S.Divider className="mb-5">
                <Formik
                  initialValues={InitialValues}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                  validateOnMount={true}
                  validationSchema={loginValidator}
                >
                  {({
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                  }) => (
                    <Form>
                      <S.Divider className="w-full py-2">
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
                      <S.Divider className="w-full flex justify-between  mb-2 items-center">
                        <FormControlLabel
                          className="text-[sm] text-slate-700"
                          control={<Checkbox size="small" color="success" />}
                          label="Remember me"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "14px",
                              color: "#3f3f3f",
                              alignItems: "center",
                              display: "flex",
                            },
                          }}
                        />
                        <span
                          className="text-[14px] text-slate-700 cursor-pointer"
                          onClick={() => navigate(RouteChannel.FORGOT_PASSWORD)}
                        >
                          Forgot Password?
                        </span>
                      </S.Divider>

                      <CustomButton
                        text="Sign In"
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
                  icon={<GoogleIcon className="text-primary" />}
                  text="Continue with Google"
                  ClassName="w-full border"
                  color={ButtonColor.default}
                  type={ButtonType.submit}
                  morph={false}
                />
              </S.Divider>
              <S.Divider className="w-full flex flex-row items-center justify-center mt-3 py-3">
                <span className="text-slate-700 text-[14px] ">
                  Don't have an account yet?
                </span>
                <span
                  className="ml-2 text-primary text-[14px] cursor-pointer"
                  onClick={() => navigate(RouteChannel.SIGN_UP)}
                >
                  Sign Up
                </span>
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Divider>
      </S.Content>
    </S.Container>
  );
};
