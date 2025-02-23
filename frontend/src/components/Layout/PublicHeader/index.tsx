import { ButtonColor, HeaderProps, RouteChannel, SFC } from "../../../types";
import { CustomButton } from "../../Inputs";

import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import Logo from "../../../asset/svg/logo.svg";
import { cn } from "../../../utils";
import { useState } from "react";

export const PublicHeader: SFC<HeaderProps> = ({ ClassName }) => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState<RouteChannel>(
    RouteChannel.INDEX,
  );
  return (
    <>
      <S.Container
        className={cn("flex items-center justify-center", ClassName)}
      >
        <S.Content className="w-full md:w-11/12 flex flex-row">
          <S.LeftContent className="flex flex-row items-center">
            <S.Image
              className=""
              src={Logo}
              onClick={() => {
                setActivePage(RouteChannel.INDEX);
                navigate(RouteChannel.INDEX);
              }}
            />
            <div className="ml-5  px-2 hidden md:block border-l-2 border-slate-400">
              <div className="flex flex-row gap-5">
                <div
                  className="cursor-pointer ml-4"
                  onClick={() => {
                    setActivePage(RouteChannel.INDEX);
                    navigate(RouteChannel.INDEX);
                  }}
                >
                  <span
                    className={`hover:text-[#2cb578] text-sm md:text-md text-sm md:text-md ${activePage === RouteChannel.INDEX ? "text-[#2cb578]" : ""}`}
                  >
                    Home
                  </span>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setActivePage(RouteChannel.EVENT);
                    navigate(RouteChannel.EVENT);
                  }}
                >
                  <span
                    className={`hover:text-[#2cb578] text-sm md:text-md ${activePage === RouteChannel.EVENT ? "text-[#2cb578]" : ""}`}
                  >
                    Event
                  </span>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setActivePage(RouteChannel.ARTICLE);
                    navigate(RouteChannel.ARTICLE);
                  }}
                >
                  <span
                    className={`hover:text-[#2cb578] text-sm md:text-md ${activePage === RouteChannel.ARTICLE ? "text-[#2cb578]" : ""}`}
                  >
                    Article
                  </span>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setActivePage(RouteChannel.ABOUT_US);
                    navigate(RouteChannel.ABOUT_US);
                  }}
                >
                  <span
                    className={`hover:text-[#2cb578] text-sm md:text-md ${activePage === RouteChannel.ABOUT_US ? "text-[#2cb578]" : ""}`}
                  >
                    About Us
                  </span>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setActivePage(RouteChannel.CONTACT_US);
                    navigate(RouteChannel.CONTACT_US);
                  }}
                >
                  <span
                    className={`hover:text-[#2cb578] text-sm md:text-md ${activePage === RouteChannel.CONTACT_US ? "text-[#2cb578]" : ""}`}
                  >
                    Contact Us
                  </span>
                </div>
              </div>
            </div>
          </S.LeftContent>
          <S.RightContent>
            <CustomButton
              morph={false}
              color={ButtonColor.default}
              text="Sign In"
              onClick={() => {
                setActivePage(RouteChannel.SIGN_IN);
                navigate(RouteChannel.SIGN_IN);
              }}
            />
            <CustomButton
              morph={false}
              text="Sign Up"
              onClick={() => {
                setActivePage(RouteChannel.SIGN_UP);
                navigate(RouteChannel.SIGN_UP);
              }}
            />
          </S.RightContent>
        </S.Content>
      </S.Container>
    </>
  );
};
