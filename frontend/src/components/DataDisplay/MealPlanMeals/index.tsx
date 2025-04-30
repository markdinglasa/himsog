import { ButtonType, FormProps, MealPlanLineTable, SFC } from "../../../types";
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
import { Avatar } from "@mui/material";
import { AccessControl } from "..";
import { MealDetails } from "../MealDetails";

export const MealPlanMeals: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  IsDisplay = false,
  IsActive = 0,
  RecordId = 0,
}) => {
  const { Id } = useParams<{ Id: string }>(); // MEAL-PLAN ID
  const MealPlanId: number =
    Number(RecordId) !== 0 ? Number(RecordId) : Number(Id);
  const { remove } = API.Setup.MealPlanLine.Remove();

  const { data: MealPlanMeals, isLoading } = API.Setup.MealPlanLine.GetAll(
    MealPlanId,
    IsActive,
  );

  const [isModal, toggleModal] = useToggle(false);
  const [recordId, setRecordId] = useState<number>(0);
  const [mealPlanId, setMealPlanId] = useState<number>(0);

  return (
    <>
      <div className={ClassName}>
        <div className="w-full flex items-center justify-between">
          <div>
            <span className="text-md font-medium">Meals</span>
          </div>
          <div>
            <AccessControl OtherCondition={!IsDetails}>
              <CustomButton
                text="New"
                onClick={toggleModal}
                leftIcon={<Icon.Add />}
                disabled={IsDetails}
              />
            </AccessControl>
          </div>
        </div>

        <div className="w-full mb-2 flex flex-wrap gap-2 pt-[1rem]">
          <div className="w-full border-b mb-2 pb-[1rem] ">
            <div className="w-full rounded-md flex flex-col border p-2 mb-2">
              <span className="text-md font-medium">Breakfast</span>
              <span className="text-sm text-slate-600">
                Best to take on 6:00 AM - 7:00 AM
              </span>
            </div>
            <div className="flex items-start justify-center flex-col gap-2 ">
              {isLoading ? (
                <Skeleton />
              ) : MealPlanMeals && MealPlanMeals.length > 0 ? (
                MealPlanMeals.filter(
                  (record: MealPlanLineTable) =>
                    Boolean(record?.IsBreakfast) === true, // display all breakfast if IsBreakfast is true
                ).map((record: MealPlanLineTable, index: number) => {
                  return (
                    <Fragment key={index}>
                      <div
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          setRecordId(record?.Id ? Number(record.Id) : 0);
                          setMealPlanId(
                            record?.MealId ? Number(record.MealId) : 0,
                          );
                          toggleModal();
                        }}
                        className="w-full h-22 cursor-pointer items-center flex border bg-white p-2 hover:bg-slate-100/60 rounded-md justify-between"
                      >
                        <div className="flex flex-row items-center justify-start">
                          <Avatar
                            src={record?.MealImage || ""}
                            alt={record?.MealName ?? "NA"}
                            variant="square"
                          />
                          <div className="flex flex-col ml-3">
                            <span className="text-md font-medium">
                              {record?.MealName ?? "NA"}
                            </span>
                            <span className="text-sm text-slate-600">
                              {parseFloat(
                                record?.MealKilocalorie?.toString() ?? "0",
                              )}{" "}
                              cal
                            </span>
                          </div>
                        </div>

                        <div>
                          <AccessControl OtherCondition={!IsDetails}>
                            <CircleButton
                              Icon={<Icon.Delete className="text-primary" />}
                              Type={ButtonType.button}
                              OnClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                if (record?.Id) remove(Number(record.Id));
                              }}
                              Disabled={IsDetails}
                            />
                          </AccessControl>
                        </div>
                      </div>
                    </Fragment>
                  );
                })
              ) : (
                <div className="w-full">
                  <NoRecord Message="No Breakfast Meals" />
                </div>
              )}
            </div>
          </div>
          <div className="w-full border-b mb-[1rem] pb-[1rem] ">
            <div className="w-full rounded-md flex flex-col border p-2 mb-2">
              <span className="text-md font-medium">Lunch</span>
              <span className="text-sm text-slate-600">
                Best to take on 12:00 NN - 01:00 PM
              </span>
            </div>
            <div className="flex items-start justify-center flex-col gap-2 ">
              {isLoading ? (
                <Skeleton />
              ) : MealPlanMeals && MealPlanMeals.length > 0 ? (
                MealPlanMeals.filter(
                  (record: MealPlanLineTable) =>
                    Boolean(record?.IsLunch) === true, // display all breakfast if IsBreakfast is true
                ).map((record: MealPlanLineTable, index: number) => {
                  return (
                    <Fragment key={index}>
                      <div
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          setRecordId(record?.Id ? Number(record.Id) : 0);
                          setMealPlanId(
                            record?.MealId ? Number(record.MealId) : 0,
                          );
                          toggleModal();
                        }}
                        className="w-full h-22 cursor-pointer items-center flex border bg-white p-2 hover:bg-slate-100/60 rounded-md justify-between"
                      >
                        <div className="flex flex-row items-center justify-start">
                          <Avatar
                            src={record?.MealImage || ""}
                            alt={record?.MealName ?? "NA"}
                            variant="square"
                          />
                          <div className="flex flex-col ml-3">
                            <span className="text-md font-medium">
                              {record?.MealName ?? "NA"}
                            </span>
                            <span className="text-sm text-slate-600">
                              {parseFloat(
                                record?.MealKilocalorie?.toString() ?? "0",
                              )}{" "}
                              kcal
                            </span>
                          </div>
                        </div>

                        <div>
                          <AccessControl OtherCondition={!IsDetails}>
                            <CircleButton
                              Icon={<Icon.Delete className="text-primary" />}
                              Type={ButtonType.button}
                              OnClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                if (record?.Id) remove(Number(record.Id));
                              }}
                              Disabled={IsDetails}
                            />
                          </AccessControl>
                        </div>
                      </div>
                    </Fragment>
                  );
                })
              ) : (
                <div className="w-full">
                  <NoRecord Message="No Lunch Meals" />
                </div>
              )}
            </div>
          </div>
          <div className="w-full border-b mb-[1rem] pb-[1rem]">
            <div className="w-full rounded-md flex flex-col border p-2 mb-2">
              <span className="text-md font-medium">Snack</span>
              <span className="text-sm text-slate-600">
                Best to take on 2:00 PM - 3:00 PM
              </span>
            </div>
            <div className="flex items-start justify-center flex-col gap-2 ">
              {isLoading ? (
                <Skeleton />
              ) : MealPlanMeals && MealPlanMeals.length > 0 ? (
                MealPlanMeals.filter(
                  (record: MealPlanLineTable) =>
                    Boolean(record?.IsSnack) === true, // display all breakfast if IsBreakfast is true
                ).map((record: MealPlanLineTable, index: number) => {
                  return (
                    <Fragment key={index}>
                      <div
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          setRecordId(record?.Id ? Number(record.Id) : 0);
                          setMealPlanId(
                            record?.MealId ? Number(record.MealId) : 0,
                          );
                          toggleModal();
                        }}
                        className="w-full h-22 cursor-pointer items-center flex border bg-white p-2 hover:bg-slate-100/60 rounded-md justify-between"
                      >
                        <div className="flex flex-row items-center justify-start">
                          <Avatar
                            src={record?.MealImage || ""}
                            alt={record?.MealName ?? "NA"}
                            variant="square"
                          />
                          <div className="flex flex-col ml-3">
                            <span className="text-md font-medium">
                              {record?.MealName ?? "NA"}
                            </span>
                            <span className="text-sm text-slate-600">
                              {parseFloat(
                                record?.MealKilocalorie?.toString() ?? "0",
                              )}{" "}
                              cal
                            </span>
                          </div>
                        </div>

                        <div>
                          <AccessControl OtherCondition={!IsDetails}>
                            <CircleButton
                              Icon={<Icon.Delete className="text-primary" />}
                              Type={ButtonType.button}
                              OnClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                if (record?.Id) remove(Number(record.Id));
                              }}
                              Disabled={IsDetails}
                            />
                          </AccessControl>
                        </div>
                      </div>
                    </Fragment>
                  );
                })
              ) : (
                <div className="w-full">
                  <NoRecord Message="No Snack" />
                </div>
              )}
            </div>
          </div>
          <div className="w-full">
            <div className="w-full rounded-md flex flex-col border p-2 mb-2">
              <span className="text-md font-medium">Dinner</span>
              <span className="text-sm text-slate-600">
                Best to take on 6:00 PM - 7:00 PM
              </span>
            </div>
            <div className="flex items-start justify-center flex-col gap-2 ">
              {isLoading ? (
                <Skeleton />
              ) : MealPlanMeals && MealPlanMeals.length > 0 ? (
                MealPlanMeals.filter(
                  (record: MealPlanLineTable) =>
                    Boolean(record?.IsDinner) === true, // display all breakfast if IsBreakfast is true
                ).map((record: MealPlanLineTable, index: number) => {
                  return (
                    <Fragment key={index}>
                      <div
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          setRecordId(record?.Id ? Number(record.Id) : 0);
                          setMealPlanId(
                            record?.MealId ? Number(record.MealId) : 0,
                          );
                          toggleModal();
                        }}
                        className="w-full h-22 cursor-pointer items-center flex border bg-white p-2 hover:bg-slate-100/60 rounded-md justify-between"
                      >
                        <div className="flex flex-row items-center justify-start">
                          <Avatar
                            src={record?.MealImage || ""}
                            alt={record?.MealName ?? "NA"}
                            variant="square"
                          />
                          <div className="flex flex-col ml-3">
                            <span className="text-md font-medium">
                              {record?.MealName ?? "NA"}
                            </span>
                            <span className="text-sm text-slate-600">
                              {parseFloat(
                                record?.MealKilocalorie?.toString() ?? "0",
                              )}{" "}
                              cal
                            </span>
                          </div>
                        </div>

                        <div>
                          <AccessControl OtherCondition={!IsDetails}>
                            <CircleButton
                              Icon={<Icon.Delete className="text-primary" />}
                              Type={ButtonType.button}
                              OnClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                if (record?.Id) remove(Number(record.Id));
                              }}
                              Disabled={IsDetails}
                            />
                          </AccessControl>
                        </div>
                      </div>
                    </Fragment>
                  );
                })
              ) : (
                <div className="w-full">
                  <NoRecord Message="No Dinner Meals" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        close={() => {
          setRecordId(0);
          setMealPlanId(0);
          toggleModal();
        }}
        title={recordId ? "Meal Details" : "New Meal"}
        open={isModal}
        ClassName="w-[80vw] md:w-[40rem] max-h-[80vh] h-fit overflow-auto"
      >
        <div className="h-full">
          <AccessControl OtherCondition={!IsDisplay}>
            <Form.Setup.MealPlanMeal
              RecordId={recordId.toString()}
              IsDetails={IsDetails}
              OnClose={toggleModal}
            />
          </AccessControl>
          <AccessControl OtherCondition={IsDisplay}>
            <MealDetails RecordId={mealPlanId.toString()} IsDisplay={true} />
          </AccessControl>
        </div>
      </CustomModal>
    </>
  );
};
export default memo(MealPlanMeals);
