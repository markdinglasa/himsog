import { useAuth } from "../../../hooks";
import { FormProps, PayTypeTable, SFC } from "../../../types";
import API from "../../../hooks/api";
import { memo, useState } from "react";
import { Skeleton } from "../../Feedback";
import Form from "../../Surfaces/Forms";
import { useToggle } from "react-use";
import { CustomModal } from "../../../modals";
import { CustomButton } from "../../Inputs";
import Icon from "../../../constants/icon";
import { useParams } from "react-router-dom";
import { AccessControl } from "..";
import Card from "../../Surfaces/Cards";

export const PayTypes: SFC<FormProps> = ({ IsEdit = true }) => {
  const { auth } = useAuth();
  const { remove } = API.Setup.PayType.Remove();
  const { Id: UserId } = useParams<{ Id: string }>();
  const Id: number = UserId ? parseInt(UserId) : parseInt(auth?.user ?? 0);
  const [record, setRecord] = useState<string>("");
  const { data: paytypes, isLoading } = API.Setup.PayType.GetAll(Id ?? 0);
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-medium">Payment Methods</span>
          <AccessControl OtherCondition={IsEdit}>
            <div>
              <div>
                <span className="text-sm text-slate-600">
                  View and manage payment methods for transactions and payments.
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
        ) : paytypes?.length ? (
          paytypes.map((record: PayTypeTable) => (
            <div key={record.Id?.toString()} className="w-full">
              <Card.PaymentMethod
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
            <span>No Payment Method</span>
          </div>
        )}
      </div>
      <CustomModal
        close={toggleDisplay}
        title="New Payment Method"
        open={isDisplay}
        ClassName="md:w-[800px] w-[80vw] h-[80vh] overflow-auto"
      >
        <Form.Setup.PayType RecordId={record} OnClose={() => toggleDisplay()} />
      </CustomModal>
    </>
  );
};

export default memo(PayTypes);
