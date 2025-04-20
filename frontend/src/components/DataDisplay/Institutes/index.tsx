import { useAuth } from "../../../hooks";
import { FormProps, ProfessionInstituteTable, SFC } from "../../../types";
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
import Card from "../../Surfaces/Cards";

export const Institutes: SFC<FormProps> = ({
  IsEdit = true,
  IsDisplay = false,
}) => {
  const { auth } = useAuth();
  const { remove } = API.Setup.ProfessionInstitute.Remove();
  const { Id: UserId } = useParams<{ Id: string }>();
  const Id: number = UserId ? parseInt(UserId) : parseInt(auth?.user ?? 0);
  const [record, setRecord] = useState<string>("");
  const { data: institutes, isLoading } = API.Setup.ProfessionInstitute.GetAll(
    Id ?? 0,
  );
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-medium">Affiliated Institutions</span>
          <AccessControl OtherCondition={IsEdit}>
            <div>
              <div>
                <span className="text-sm text-slate-600">
                  Hospital, clinic, school or universities affiliated with.
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

      <div className="w-full flex flex-wrap gap-3 mt-3">
        {isLoading ? (
          <Skeleton />
        ) : institutes?.length ? (
          institutes.map((record: ProfessionInstituteTable) => (
            <div key={record.Id?.toString()} className="w-full">
              <Card.Institute
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
          <div className="w-full text-center items-center">
            <NoRecord Message="No Affiliated Institute" />
          </div>
        )}
      </div>
      <CustomModal
        close={toggleDisplay}
        title="New Institute"
        open={isDisplay}
        ClassName="md:w-[800px] w-[80vw]"
      >
        <Form.Setup.Institute
          RecordId={record}
          OnClose={() => toggleDisplay()}
        />
      </CustomModal>
    </>
  );
};

export default memo(Institutes);
