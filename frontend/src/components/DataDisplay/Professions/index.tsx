import { useAuth } from "../../../hooks";
import { FormProps, ProfessionTable, SFC } from "../../../types";
import API from "../../../hooks/api";
import { memo, useState } from "react";
import { Skeleton } from "../../Feedback";
import Form from "../../Surfaces/Forms";
import { useToggle } from "react-use";
import { CustomModal } from "../../../modals";
import { CustomButton } from "../../Inputs";
import Icon from "../../../constants/icon";
import { useParams } from "react-router-dom";
import { AccessControl, NoRecord } from "..";
import LicenseCard from "../../Surfaces/Cards/LicenseCard";

export const Professions: SFC<FormProps> = ({
  IsEdit = true,
  IsDisplay = false,
}) => {
  const { auth } = useAuth();
  const { remove } = API.Setup.Profession.Remove();
  const { Id: UserId } = useParams<{ Id: string }>();
  const Id: number = UserId ? parseInt(UserId) : parseInt(auth?.user ?? 0);
  const [record, setRecord] = useState<string>("");
  const { data: professions, isLoading } = API.Setup.Profession.GetAll(Id);
  const [isDisplay, toggleDisplay] = useToggle(false);

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between ">
        <div className="flex flex-col">
          <span className="text-lg font-medium">Licenses</span>
          <AccessControl OtherCondition={IsEdit}>
            <div>
              <div>
                <span className="text-sm text-slate-600">
                  A professional license is a formal credential that certifies
                  an individual’s qualifications to legally practice a regulated
                  profession.
                </span>
              </div>
            </div>
          </AccessControl>
        </div>

        <AccessControl OtherCondition={IsEdit && !IsDisplay}>
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

      <div className="w-full flex flex-wrap gap-3 mt-3 ">
        {isLoading ? (
          <Skeleton />
        ) : professions?.length ? (
          professions.map((record: ProfessionTable) => (
            <div key={record.Id?.toString()} className="w-full">
              <LicenseCard
                OnEdit={() => {
                  setRecord(record?.Id?.toString() ?? "");
                  toggleDisplay();
                }}
                OnDelete={() => remove(Number(record.Id))}
                Data={record}
                IsDisplay={IsDisplay}
              />
            </div>
          ))
        ) : (
          <div className="w-full text-center items-center py-[1rem] mb-[1rem]">
            <NoRecord Message="No Profession License" />
          </div>
        )}
      </div>
      <CustomModal
        close={toggleDisplay}
        title="New Profession License"
        open={isDisplay}
        ClassName="md:w-[800px] w-[80vw]"
      >
        <Form.Setup.Profession
          ClassName=""
          RecordId={record}
          OnClose={() => toggleDisplay()}
        />
      </CustomModal>
    </>
  );
};

export default memo(Professions);
