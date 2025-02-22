import { Form, Formik } from "formik";
import { CardFooter, CustomButton, Input } from "../../components";
import {
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
import LoginIcon from "@mui/icons-material/Login";
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
      console.log(response);
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
      //console.log(error);
      setErrorMessage(error.response?.data?.message || Error.m00019);
    }
  };

  return (
    <S.Container
      className={cn(
        `w-screen bg-[#e2e9ef] h-screen items-center flex justify-center`,
        ClassName,
      )}
    >
      <S.Content className="flex justify-center items-center  w-full">
        <S.Divider className="flex md:flex-row flex-col w-full md:w-[90vw] p-3 gap-5 md:gap-20">
          <S.Divider className="md:w-6/12 border-red flex items-center justify-center">
            image/logo here
          </S.Divider>
          <S.Divider className="md:w-4/12 w-full bg-white p-3 rounded-lg">
            {errorMessage && (
              <S.Divider className="text-center w-full mb-2">
                <S.Span className="p-3 text-red-500 text-center text-[14px]">
                  {errorMessage}
                </S.Span>
              </S.Divider>
            )}

            <S.Divider className="w-full">
              <S.Divider className="mb-5">
                <Formik
                  initialValues={InitialValues}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                  validateOnMount={true}
                  validationSchema={loginValidator}
                >
                  {({ errors, touched, isSubmitting, handleChange }) => (
                    <Form>
                      <S.Divider className="w-full mb-2">
                        <Input
                          ClassName="text-slate-100"
                          errors={errors}
                          type={InputType.email}
                          label="Email"
                          name="Email"
                          touched={touched}
                          onChange={handleChange}
                        />
                      </S.Divider>
                      <S.Divider className="w-full mb-2">
                        <Input
                          ClassName="text-zinc-900"
                          errors={errors}
                          type={InputType.password}
                          label="Password"
                          name="Password"
                          touched={touched}
                          onChange={handleChange}
                        />
                      </S.Divider>
                      <S.Divider className="w-full flex justify-between  mb-2 items-center">
                        <FormControlLabel
                          className="text-[sm] text-slate-700"
                          control={<Checkbox size="small" />}
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
                          Forgot Password
                        </span>
                      </S.Divider>

                      <CustomButton
                        icon={<LoginIcon />}
                        text={"Sign In"}
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
                  icon={<GoogleIcon />}
                  text="Continue with Google"
                  ClassName="w-full"
                  type={ButtonType.submit}
                  morph={false}
                />
              </S.Divider>
              <S.Divider className="footer w-full">
                <CardFooter />
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Divider>
      </S.Content>
    </S.Container>
  );
};
