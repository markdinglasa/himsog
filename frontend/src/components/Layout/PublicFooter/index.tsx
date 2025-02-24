import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles";
import { cn } from "../../../utils";
import Logo from "../../../asset/svg/logo.svg";
import { useNavigate } from "react-router-dom";

export const PublicFooter: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container
        className={cn(
          "flex items-center justify-center  w-full bg-none border-t",
          ClassName,
        )}
      >
        <S.Content className="w-full md:w-11/12 p-2 flex md:flex-row flex-col  gap-2">
          <S.Divider className="w-full flex flex-col  items-start justify-center md:w-3/12 ">
            <S.Divider>
              <S.Image src={Logo} className="w-full h-12" alt="himsog-logo" />
            </S.Divider>
            <S.Divider>
              <S.Span className="text-sm font-medium italic font-(family-name:Montserrat)">
                Eat Smart. Live Healthy.
              </S.Span>
            </S.Divider>
            <S.Divider>
              <S.Span className="text-sm">
                &copy; {new Date().getFullYear()} Himsog. All rights reserved.
              </S.Span>
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full flex flex-col md:w-3/12 ">
            <S.Divider>
              <S.Span className="text-2xl">Company</S.Span>
            </S.Divider>
            <S.Divider
              className="cursor-pointer "
              onClick={() => navigate(RouteChannel.INDEX)}
            >
              <S.Span className="text-sm hover:text-[#2cb578]">Home</S.Span>
            </S.Divider>
            <S.Divider
              className="cursor-pointer"
              onClick={() => navigate(RouteChannel.ABOUT_US)}
            >
              <S.Span className="text-sm hover:text-[#2cb578]">About Us</S.Span>
            </S.Divider>
            <S.Divider
              className="cursor-pointer"
              onClick={() => navigate(RouteChannel.CONTACT_US)}
            >
              <S.Span className="text-sm hover:text-[#2cb578]">
                Contact Us
              </S.Span>
            </S.Divider>
            <S.Divider
              className="cursor-pointer"
              onClick={() => navigate(RouteChannel.HOW_IT_WORKS)}
            >
              <S.Span className="text-sm hover:text-[#2cb578]">
                How it works
              </S.Span>
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full flex flex-col md:w-3/12  ">
            <S.Divider>
              <S.Span className="text-2xl">Support</S.Span>
            </S.Divider>
            <S.Divider
              className="cursor-pointer"
              onClick={() => navigate(RouteChannel.FAQ)}
            >
              <S.Span className="text-sm hover:text-[#2cb578] ">FAQs</S.Span>
            </S.Divider>
            <S.Divider
              className="cursor-pointer"
              onClick={() => navigate(RouteChannel.PRIVACY_POLICY)}
            >
              <S.Span className="text-sm hover:text-[#2cb578]">
                Privacy Policy
              </S.Span>
            </S.Divider>
            <S.Divider
              className="cursor-pointer"
              onClick={() => navigate(RouteChannel.TERMS_AND_CONDITIONS)}
            >
              <S.Span className="text-sm hover:text-[#2cb578]">
                Terms of Service
              </S.Span>
            </S.Divider>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
