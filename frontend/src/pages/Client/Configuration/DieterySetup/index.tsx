import {
  ButtonColor,
  ButtonType,
  HealthConditionTable,
  RouteChannel,
  SFC,
} from "../../../../types";
import * as S from "./Styles";
import { memo } from "react";
import Logo from "../../../../asset/svg/logo.svg";
import Form from "../../../../components/Surfaces/Forms";
import API from "../../../../hooks/api";
import { useAuth } from "../../../../hooks";
import { CustomButton, Skeleton } from "../../../../components";
import { useNavigate } from "react-router-dom";

export const ConfigurationDieteryPage: SFC = () => {
  const { auth } = useAuth();
  const { data } = API.Setup.User.Get(auth?.user ?? 0);
  const { data: health } = API.Setup.Health.Get(auth?.user ?? 0);
  const navigate = useNavigate();
  const { data: dietary, isLoading } = API.Setup.HealthCondition.GetAll(
    health?.Id ?? 0,
  );
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
                Let's setup your health profile.
              </span>
            </div>
            <div className="mb-2">
              <Form.Setup.HealthConditionForm />
            </div>
            <div className="border-red w-full">
              {!isLoading ? (
                dietary?.map((record: HealthConditionTable) => {
                  if (record.Category === "dietery-preference") {
                    return (
                      <div key={record?.Id?.toString()}>
                        {record.Description}
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                <Skeleton />
              )}
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
              <CustomButton
                text="Next"
                ClassName=""
                type={ButtonType.button}
                onClick={() => navigate(RouteChannel.CLIENT_ALLERGEN_SETUP)}
                morph={false}
              />
            </div>
          </div>
        </S.MainContent>
      </S.Container>
    </>
  );
};

export default memo(ConfigurationDieteryPage);
