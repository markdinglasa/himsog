import { SFC } from "../../../../types";
import * as S from "./Styles";
import { memo } from "react";
import Logo from "../../../../asset/svg/logo.svg";
import Form from "../../../../components/Surfaces/Forms";

export const ConfigurationProfilePage: SFC = () => {
  return (
    <>
      <S.Container className="w-screen h-screen overflow-auto">
        <S.MainContent className="flex items-center justify-center">
          <div className="w-full md:w-6/12 w-full mt-10">
            <div className="mb-10">
              <img src={Logo} className="" />
            </div>
            <div className="flex flex-col items-start justify-start w-full mb-10">
              <span className="text-xl font-medium">Welcome, Dear Client</span>
              <span className="text-sm text-slate-600">
                Let's setup your profile.
              </span>
              =
            </div>
            <div className="">
              <Form.Setup.User />
            </div>
          </div>
        </S.MainContent>
      </S.Container>
    </>
  );
};

export default memo(ConfigurationProfilePage);
