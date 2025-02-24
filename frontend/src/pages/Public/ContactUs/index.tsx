import { Roles, SFC } from "../../../types";
import * as S from "../../../styles";
import { cn, renderPath } from "../../../utils";
import { ContactUsForm } from "../../../components";
import { useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PublicContactUsPage: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.user) {
      const path = renderPath(auth?.roles ?? Roles.default);
      navigate(path);
    }
  }, [auth]);
  return (
    <>
      <S.Container
        className={cn(
          "h-full flex flex-col items-center justify-center",
          ClassName,
        )}
      >
        <S.Content className="w-full md:w-11/12 flex flex-col gap-2  items-center justify-center mb-5">
          <S.Span className="text-2xl font-semibold">Contact our team</S.Span>
          <S.Span className="text-sm">
            Got any question about our platform? We're here to help.
          </S.Span>
        </S.Content>
        <S.Content className="w-full md:w-11/12 flex flex-col md:flex-row gap-5">
          <S.Divider className="border w-full md:w-7/12 p-5 bg-slate-50">
            <ContactUsForm Title="We'd loved to hear from you" />
          </S.Divider>
          <S.Divider className="border w-full md:w-5/12 p-5 h-fit bg-slate-50">
            <S.Divider className="flex flex-col gap-2 mb-3">
              <S.Span className="text-2xl">Contact Us</S.Span>
              <S.Span className="text-sm text-slate-500">
                Speak to our friendly team via mobile phone.
              </S.Span>
              <S.Span className="text-sm mt-3">+63 920-514-8696 (Smart)</S.Span>
              <S.Span className="text-sm">+63 948-391-7361 (Globe)</S.Span>
            </S.Divider>
            <S.Divider className="flex flex-col gap-2 mb-3">
              <S.Span>E-mail</S.Span>
              <S.Span className="text-sm">teamhimsog2024@gmail.com</S.Span>
            </S.Divider>
            <S.Divider className="flex flex-col gap-2">
              <S.Span>Visit Us</S.Span>
              <S.Span className="text-sm ">
                Sanciangko St., Cebu City, Philippines
              </S.Span>
            </S.Divider>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};

export default PublicContactUsPage;
