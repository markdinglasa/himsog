import { useAuth } from "../../../hooks";
import { FormProps, ProfessionSpecialistTable, SFC } from "../../../types";
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

export const Specialists: SFC<FormProps> = ({ IsEdit = true }) => {
  const { auth } = useAuth();
  const { remove } = API.Setup.ProfessionSpecialist.Remove();
  const { Id: UserId } = useParams<{ Id: string }>();
  const Id: number = UserId ? parseInt(UserId) : parseInt(auth?.user ?? 0);
  const [record, setRecord] = useState<string>("");
  const { data: specialists, isLoading } =
    API.Setup.ProfessionSpecialist.GetAll(Id ?? 0);
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-medium">Areas of Specialization</span>
          <AccessControl OtherCondition={IsEdit}>
            <div>
              <div>
                <span className="text-sm text-slate-600">
                  Health profession area of expertise.
                </span>
              </div>
            </div>
          </AccessControl>
        </div>
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

      <div className="w-full flex flex-wrap gap-3 mt-3">
        {isLoading ? (
          <Skeleton />
        ) : specialists?.length ? (
          specialists.map((record: ProfessionSpecialistTable) => (
            <div key={record.Id?.toString()} className="w-full">
              <Card.Specialist
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
            <NoRecord Message="No Specialization" />
          </div>
        )}
      </div>
      <CustomModal
        close={toggleDisplay}
        title="New Specialization"
        open={isDisplay}
        ClassName="md:w-[800px] w-[80vw]"
      >
        <Form.Setup.Specialist
          RecordId={record}
          OnClose={() => toggleDisplay()}
        />
      </CustomModal>
    </>
  );
};

export default memo(Specialists);
