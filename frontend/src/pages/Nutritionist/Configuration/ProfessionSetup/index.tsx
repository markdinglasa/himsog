import { ButtonColor, ButtonType, RouteChannel, SFC } from "../../../../types";
import * as S from "./Styles";
import { memo } from "react";
import Logo from "../../../../asset/svg/logo.svg";
import API from "../../../../hooks/api";
import { useAuth } from "../../../../hooks";
import { CustomButton, Professions } from "../../../../components";
import { useNavigate } from "react-router-dom";

export const ConfigurationProfessionPage: SFC = () => {
  const { auth } = useAuth();
  const { data } = API.Setup.User.Get(auth?.user ?? 0);
  const navigate = useNavigate();
  return (
    <>
      <S.Container className="w-screen h-screen overflow-auto">
        <S.MainContent className="flex items-center justify-center">
          <div className="w-full md:w-6/12 w-full mt-10">
            <div className="mb-10">
              <img src={Logo} className="" />
            </div>
            <div className="flex flex-col items-start justify-start w-full mb-10">
              <span className="text-xl font-medium">
                Welcome, {data?.Firstname ?? ""}
              </span>
              <span className="text-sm text-slate-600">
                Let's setup your profession profile.
              </span>
            </div>
            <div className="mb-[1rem]">
              <Professions />
            </div>
            <div className="w-full flex justify-between items-center">
              <CustomButton
                text="Back"
                ClassName=""
                type={ButtonType.button}
                color={ButtonColor.default}
                morph={false}
                onClick={() => navigate(RouteChannel.CLIENT_HEALTH_SETUP)}
              />
              <div className="w-full flex justify-end flex-row items-center  gap-2">
                <CustomButton
                  text="Skip"
                  ClassName=""
                  color={ButtonColor.default}
                  type={ButtonType.button}
                  onClick={() => navigate(RouteChannel.NUTRITIONIST_DASHBOARD)}
                  morph={false}
                />
                <CustomButton
                  text="Next"
                  ClassName=""
                  type={ButtonType.button}
                  onClick={() =>
                    navigate(RouteChannel.NUTRITIONIST_CERTIFICATE_SETUP)
                  }
                  morph={false}
                />
              </div>
            </div>
          </div>
        </S.MainContent>
      </S.Container>
    </>
  );
};

export default memo(ConfigurationProfessionPage);
