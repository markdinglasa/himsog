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
        className={cn("flex items-center justify-center px-[1rem]", ClassName)}
      >
        <S.Content className="w-full md:w-11/12 flex flex-row border-red">
          <S.LeftContent className="flex flex-row items-center">
            <S.Image
              className=""
              src={Logo}
              onClick={() => {
                setActivePage(RouteChannel.INDEX);
                navigate(RouteChannel.INDEX);
              }}
            />
          </S.LeftContent>
          <S.RightContent className="w-full flex flex-row items-center justify-end border-red">
            <div className="px-2 hidden md:block">
              <div className="flex flex-row gap-5 ">
                <div
                  className="cursor-pointer"
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
                    setActivePage(RouteChannel.HOW_IT_WORKS);
                    navigate(RouteChannel.HOW_IT_WORKS);
                  }}
                >
                  <span
                    className={`hover:text-[#2cb578] text-sm md:text-md text-sm md:text-md ${activePage === RouteChannel.HOW_IT_WORKS ? "text-[#2cb578]" : ""}`}
                  >
                    How it works
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
                {/*<div
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
                </div>*/}
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
                {/*<div
                  className="cursor-pointer"
                  onClick={() => {
                    setActivePage(RouteChannel.PRICING);
                    navigate(RouteChannel.PRICING);
                  }}
                >
                  <span
                    className={`hover:text-[#2cb578] text-sm md:text-md ${activePage === RouteChannel.PRICING ? "text-[#2cb578]" : ""}`}
                  >
                    Pricing
                  </span>
                </div>*/}
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[1rem]">
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
            </div>
          </S.RightContent>
        </S.Content>
      </S.Container>
    </>
  );
};
