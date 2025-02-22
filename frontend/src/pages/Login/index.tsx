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
import { useNavigate } from "react-router-dom";
import { BASE_URL, Error, loginFormValues } from "../../shared";
import { useAuth } from "../../hooks";
import { loginValidator } from "../../validators";
import * as S from "../../styles";
import { cn } from "../../utils";

export const PageLogin: SFC = ({ ClassName }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    if (auth?.user) navigate(RouteChannel.DASHBOARD);
  }, [auth]);

  const InitialValues: LoginTable = {
    Username: "",
    Password: "",
  };

  const handleSubmit = async (values: loginFormValues): Promise<void> => {
    const data: LoginTable = { ...values };
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      if (response.data.data.success) {
        const user: UserTable = response.data.data.user;
        const roles: Roles = response.data.data.role;
        const accessToken: string = response.data.data.accessToken;
        const refreshToken: string = response.data.data.refreshToken;
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
          <S.Divider className="md:w-7/12 w-full text-right flex item-center flex-col justify-center">
            <S.H1 className=" md:text-right text-center">INNOSOFT</S.H1>
            <S.Span className="text-[25px] text-zinc-700 md:text-right text-center">
              Grow your business with Innosoft
            </S.Span>
          </S.Divider>
          <S.Divider className="md:w-4/12 w-full bg-white p-3 rounded-lg">
            {errorMessage && (
              <S.Divider className="text-center w-full mb-2">
                <S.Span className="p-3 text-red-500 text-center text-[14px]">
                  {errorMessage}
                </S.Span>
              </S.Divider>
            )}

            <S.Divider className="w-">
              <S.Divider>
                <Formik
                  initialValues={InitialValues}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                  validateOnMount={true}
                  validationSchema={loginValidator}
                >
                  {({ errors, touched, isSubmitting, handleChange }) => (
                    <Form>
                      <Input
                        ClassName="text-slate-100"
                        errors={errors}
                        type={InputType.text}
                        label="Username"
                        name="Username"
                        touched={touched}
                        onChange={handleChange}
                      />
                      <Input
                        ClassName="text-zinc-900"
                        errors={errors}
                        type={InputType.password}
                        label="Password"
                        name="Password"
                        touched={touched}
                        onChange={handleChange}
                      />
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
