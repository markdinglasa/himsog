import {
  ButtonColor,
  ButtonType,
  CertificateTable,
  RouteChannel,
  SFC,
} from "../../../../types";
import * as S from "./Styles";
import { memo, useState } from "react";
import Logo from "../../../../asset/svg/logo.svg";
import Form from "../../../../components/Surfaces/Forms";
import API from "../../../../hooks/api";
import { useAuth } from "../../../../hooks";
import { CustomButton, Skeleton } from "../../../../components";
import Certificate from "../../../../components/DataDisplay/Certificate";
import { useNavigate } from "react-router-dom";
import Icon from "../../../../constants/icon";
import { CustomModal } from "../../../../modals";
import { useToggle } from "react-use";

export const ConfigurationCertificatePage: SFC = () => {
  const { auth } = useAuth();
  const { data } = API.Setup.User.Get(auth?.user ?? 0);
  const { remove } = API.Setup.Certificate.Remove();
  const { data: profession } = API.Setup.Profession.Get(auth?.user ?? 0);
  const navigate = useNavigate();
  const [record, setRecord] = useState<string>("");
  const { data: certificates, isLoading } = API.Setup.Certificate.GetAll(
    profession?.Id ?? 0,
  );

  const [isDisplay, toggleDisplay] = useToggle(false);
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
            <div className="flex flex-row items-center justify-between">
              <span className="text-lg font-medium">
                Profession Certificate
              </span>
              <CustomButton
                leftIcon={<Icon.Add />}
                text={"Add"}
                onClick={() => {
                  setRecord("");
                  toggleDisplay();
                }}
                morph={false}
              />
            </div>
            <div className="w-full mb-2 flex flex-wrap gap-2 mb-2 mt-2">
              {isLoading ? (
                <Skeleton />
              ) : certificates?.length ? (
                certificates.map((record: CertificateTable) => (
                  <div key={record.Id?.toString()} className="w-full">
                    <Certificate
                      OnEdit={() => {
                        setRecord(record?.Id?.toString() ?? "");
                        toggleDisplay();
                      }}
                      OnDelete={() => remove(Number(record.Id))}
                      Data={record}
                    />
                  </div>
                ))
              ) : (
                <div className="w-full text-center items-center">
                  <span>No Certificate</span>
                </div>
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
              <div className="w-full flex justify-end flex-row items-center gap-2">
                <CustomButton
                  text="Skip"
                  ClassName=""
                  type={ButtonType.button}
                  onClick={() => navigate(RouteChannel.NUTRITIONIST_DASHBOARD)}
                  morph={false}
                />
              </div>
            </div>
          </div>
        </S.MainContent>
      </S.Container>
      <CustomModal
        close={toggleDisplay}
        title="New Profession Certificate"
        open={isDisplay}
        ClassName="md:w-[800px] w-[80vw]"
      >
        <Form.Setup.Certificate RecordId={record} />
      </CustomModal>
    </>
  );
};

export default memo(ConfigurationCertificatePage);
