import { ButtonType, NutritionFactTable, FormProps, SFC } from "../../../types";
import API from "../../../hooks/api";
import { Skeleton } from "../../Feedback";
import { Fragment, memo, useState } from "react";
import { useParams } from "react-router-dom";
import { NoRecord } from "../Tables";
import { CircleButton, CustomButton } from "../../Inputs";
import Icon from "../../../constants/icon";
import { useToggle } from "react-use";
import { CustomModal } from "../../../modals";
import Form from "../../../components/Surfaces/Forms";
import { AccessControl } from "..";

export const NutritionFacts: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  IsDisplay = false,
  RecordId = "0",
}) => {
  const { Id } = useParams<{ Id: string }>(); // MEAL ID
  const MealId = IsDisplay ? Number(RecordId) : Number(Id);
  const { remove } = API.Setup.NutritionFact.Remove();
  const { data: nutritionfacts, isLoading } =
    API.Setup.NutritionFact.GetAll(MealId);
  const [isModal, toggleModal] = useToggle(false);
  const [recordId, setRecordId] = useState<number>(0);
  return (
    <>
      <div className={ClassName}>
        <div className="w-full flex items-center justify-between">
          <div>
            <span className="text-md font-medium">Nutrition Facts</span>
          </div>
          <div>
            <AccessControl OtherCondition={!IsDisplay}>
              <CustomButton
                text="New"
                onClick={toggleModal}
                leftIcon={<Icon.Add />}
                disabled={IsDetails}
              />
            </AccessControl>
          </div>
        </div>
        <div className="w-full mb-2 flex flex-wrap gap-2 py-[1rem]">
          {isLoading ? (
            <Skeleton />
          ) : nutritionfacts?.length ? (
            nutritionfacts.map((record: NutritionFactTable) => (
              <Fragment key={record.Id?.toString()}>
                <div
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    setRecordId(Number(record?.Id) ?? 0);
                    toggleModal();
                  }}
                  className="w-full h-22 items-center flex border bg-white p-2 hover:bg-slate-100/60 rounded-md justify-between cursor-pointer"
                >
                  <div className="flex flex-col">
                    <span className="text-md font-medium">
                      {record?.Name ?? "NA"}
                    </span>
                    <span className="text-sm text-slate-600">
                      {parseFloat(record.Quantity.toString())}{" "}
                      {record?.UnitName ?? "NA"} {" ⋅ "}
                      {parseFloat(record?.Kilocalorie.toString() ?? "0")}{" "}
                      {"cal"}
                    </span>
                  </div>
                  <div>
                    <AccessControl OtherCondition={!IsDisplay}>
                      <CircleButton
                        Icon={<Icon.Delete className="text-primary" />}
                        Type={ButtonType.button}
                        OnClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          remove(Number(record.Id));
                        }}
                        Disabled={IsDetails}
                      />
                    </AccessControl>
                  </div>
                </div>
              </Fragment>
            ))
          ) : (
            <div className="w-full">
              <NoRecord Message="No Nutrition Fact" />
            </div>
          )}
        </div>
      </div>
      <CustomModal
        close={() => {
          setRecordId(0);
          toggleModal();
        }}
        title={recordId ? "Nutrition Fact Details" : "New Nutrition Fact"}
        open={isModal}
        ClassName="w-[80vw] md:w-[40rem]"
      >
        <div>
          <Form.Setup.NutritionFact
            RecordId={recordId.toString()}
            IsDetails={IsDetails}
            OnClose={toggleModal}
          />
        </div>
      </CustomModal>
    </>
  );
};
export default memo(NutritionFacts);
