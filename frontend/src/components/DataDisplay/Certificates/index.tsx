import { useAuth } from "../../../hooks";
import { CertificateTable, SFC } from "../../../types";
import API from "../../../hooks/api";
import { memo, useState } from "react";
import { Skeleton } from "../../Feedback";
import Certificate from "../Certificate";
import Form from "../../Surfaces/Forms";
import { useToggle } from "react-use";
import { CustomModal } from "../../../modals";
import { CustomButton } from "../../Inputs";
import Icon from "../../../constants/icon";
export const Certificates: SFC = () => {
  const { auth } = useAuth();
  const { remove } = API.Setup.Certificate.Remove();
  const { data: profession } = API.Setup.Profession.Get(auth?.user ?? 0);
  const [record, setRecord] = useState<string>("");
  const { data: certificates, isLoading } = API.Setup.Certificate.GetAll(
    profession?.Id ?? 0,
  );
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <span className="text-lg font-medium">Profession Certificates</span>
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
      <div>
        <div>
          <span className="text-sm text-slate-600">
            View and manage your certificates to keep receiving newsletters,
            himsog tips, and more.
          </span>
        </div>
      </div>
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
            <span>No Certificate</span>
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
