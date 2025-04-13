import { ButtonType, IngredientTable, SetupForm, SFC } from "../../../types";
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

export const Ingredients: SFC<SetupForm> = ({ ClassName, IsDetails }) => {
  const { Id } = useParams<{ Id: string }>(); // MEAL ID
  const { remove } = API.Setup.Ingredient.Remove();
  const { data: ingredients, isLoading } = API.Setup.Ingredient.GetAll(
    Number(Id),
  );
  const [isModal, toggleModal] = useToggle(false);
  const [recordId, setRecordId] = useState<number>(0);
  return (
    <>
      <div className={ClassName}>
        <div className="w-full flex items-center justify-between">
          <div>
            <span className="text-md font-medium">Ingredients</span>
          </div>
          <div>
            <CustomButton
              text="New"
              onClick={toggleModal}
              leftIcon={<Icon.Add />}
              disabled={IsDetails}
            />
          </div>
        </div>
        <div className="w-full mb-2 flex flex-wrap gap-2 py-[1rem]">
          {isLoading ? (
            <Skeleton />
          ) : ingredients?.length ? (
            ingredients.map((record: IngredientTable) => (
              <Fragment key={record.Id?.toString()}>
                <div
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    setRecordId(Number(record?.Id) ?? 0);
                    toggleModal();
                  }}
                  className="w-full h-22 items-center flex border bg-white p-2 hover:bg-slate-100/60 rounded-md justify-between"
                >
                  <div className="flex flex-col">
                    <span className="text-md font-medium">
                      {record?.Name ?? "NA"}
                    </span>
                    <span className="text-sm text-slate-600">
                      {record.Quantity} {record?.UnitName ?? "NA"}
                    </span>
                  </div>
                  <div>
                    <CircleButton
                      Icon={<Icon.Delete className="text-primary" />}
                      Type={ButtonType.button}
                      OnClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        remove(Number(record.Id));
                      }}
                    />
                  </div>
                </div>
              </Fragment>
            ))
          ) : (
            <div className="w-full">
              <NoRecord Message="No Ingredients" />
            </div>
          )}
        </div>
      </div>
      <CustomModal
        close={() => {
          setRecordId(0);
          toggleModal();
        }}
        title={"New Ingredient"}
        open={isModal}
        ClassName="w-[80vw] md:w-[40rem]"
      >
        <div>
          <Form.Setup.Ingredient
            RecordId={recordId.toString()}
            IsDetails={false}
            OnClose={toggleModal}
          />
        </div>
      </CustomModal>
    </>
  );
};
export default memo(Ingredients);
