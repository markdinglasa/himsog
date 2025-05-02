import { useAuth } from "../../../hooks";
import { CertificateTable, FormProps, SFC } from "../../../types";
import API from "../../../hooks/api";
import { memo, useState } from "react";
import { Skeleton } from "../../Feedback";
import Certificate from "../Certificate";
import Form from "../../Surfaces/Forms";
import { useToggle } from "react-use";
import { CustomModal } from "../../../modals";
import { CustomButton } from "../../Inputs";
import Icon from "../../../constants/icon";
import { useParams } from "react-router-dom";
import { AccessControl, NoRecord } from "..";

export const Certificates: SFC<FormProps> = ({ IsEdit = true }) => {
  const { auth } = useAuth();
  const { remove } = API.Setup.Certificate.Remove();
  const { Id: UserId } = useParams<{ Id: string }>();
  const Id: number = UserId ? parseInt(UserId) : parseInt(auth?.user ?? 0);
  const [record, setRecord] = useState<string>("");
  const { data: certificates, isLoading } = API.Setup.Certificate.GetAll(
    Id ?? 0,
  );
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <span className="text-lg font-medium">Certificates</span>
        <AccessControl OtherCondition={IsEdit}>
          <CustomButton
            leftIcon={<Icon.Add />}
            text={"New"}
            onClick={() => {
              setRecord("");
              toggleDisplay();
            }}
            disabled={false}
            morph={false}
          />
        </AccessControl>
      </div>
      <AccessControl OtherCondition={IsEdit}>
        <div>
          <div>
            <span className="text-sm text-slate-600">
              View and manage your certificates to keep receiving newsletters,
              himsog tips, and more.
            </span>
          </div>
        </div>
      </AccessControl>
      <div className="w-full mb-2 flex flex-wrap gap-3 mt-3">
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
            <NoRecord Message="No Certificate" />
          </div>
        )}
      </div>
      <CustomModal
        close={toggleDisplay}
        title="New Profession Certificate"
        open={isDisplay}
        ClassName="md:w-[800px] w-[80vw]"
      >
        <Form.Setup.Certificate
          RecordId={record}
          OnClose={() => toggleDisplay()}
        />
      </CustomModal>
    </>
  );
};

export default memo(Certificates);
