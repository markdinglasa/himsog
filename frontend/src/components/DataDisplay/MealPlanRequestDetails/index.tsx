import { memo, useState } from "react";
import { AccessControl } from "..";
import {
  ButtonColor,
  ButtonType,
  FormProps,
  MealPlanRequestTable,
  MealPlanTable,
  Roles,
  RouteChannel,
  SFC,
} from "../../../types";
import { cn, renderPath } from "../../../utils";
import MealPlanDetails from "../MealPlanDetails";
import API from "../../../hooks/api";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { AutoComplete, CircleButton, CustomButton } from "../../Inputs";
import Icon from "../../../constants/icon";
import { useAuth } from "../../../hooks";
import { CustomModal } from "../../../modals";
import { useToggle } from "react-use";
import { Skeleton } from "../../Feedback";
import Form from "../../../components/Surfaces/Forms";

export const MealPlanRequestDetails: SFC<FormProps> = ({
  ClassName,
  IsAdvocate = false,
}) => {
  const { Id } = useParams<{ Id: string }>();
  const { data } = API.Transaction.MealPlanRequest.Get(Number(Id));
  const navigate = useNavigate();
  const { auth } = useAuth();
  const path = renderPath(auth?.roles as Roles);
  const [isModal, toggleModal] = useToggle(false);

  const { update } = API.Transaction.MealPlanRequest.Update();
  const [mealplanId, setMealPlanId] = useState<number>();
  const [err, setErr] = useState<string | null>(null);
  const { data: mealplans, isLoading } = API.Setup.MealPlan.GetAll(
    Number(auth?.user ?? 0),
  );

  return (
    <>
      <div className={cn("w-full flex flex-col", ClassName)}>
        <div className="w-full">
          <span className="text-lg font-medium">
            Meal Plan - Request Details
          </span>
        </div>
        <div className="w-full  rounded-md my-[1rem] flex flex-row gap-[1rem] ">
          <div>
            <Avatar
              src={
                IsAdvocate
                  ? data?.AdvocatePhoto || ""
                  : data?.NutritionistPhoto || ""
              }
              sizes="large"
              sx={{ width: "5rem", height: "5rem" }}
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex items-start justify-center flex-col">
              <span className="text-lg font-medium">
                {IsAdvocate
                  ? (data?.AdvocateFullname ?? "NA")
                  : (data?.NutritionistFullname ?? "NA")}
              </span>
              <span className="text-sm ">
                {IsAdvocate ? "Advocate" : "Health Professional"}
              </span>
            </div>
            <div className="flex flex-row items-center justify-end gap-[1rem]">
              <CustomButton
                leftIcon={<Icon.People />}
                text="View Profile"
                onClick={() =>
                  navigate(
                    `${path}/profile/${IsAdvocate ? (data?.AdvocateId ?? 0) : (data?.NutritionistId ?? 0)}`,
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mb-[1rem]">
          <span className="text-[12px] font-medium">Notes</span>
          <p className="bg-blue-100 rounded-md p-[1rem] h-14">
            {data?.Remarks ?? ""}
          </p>
        </div>
        <div>
          <AccessControl OtherCondition={!data?.MealPlanId && !IsAdvocate}>
            <div className="w-full flex flex-col ">
              <span className="text-[12px] font-medium">Status</span>
              <p className="bg-orange-100 rounded-md p-[1rem] h-14">Pending</p>
            </div>
          </AccessControl>
          <AccessControl OtherCondition={IsAdvocate}>
            <div className="w-full flex items-center justify-between">
              <span className="text-lg font-medium">Meal Plan</span>
              <CustomButton
                text="New"
                onClick={toggleModal}
                leftIcon={<Icon.Add />}
              />
            </div>
          </AccessControl>
          <AccessControl OtherCondition={data?.MealPlanId && !IsAdvocate}>
            <MealPlanDetails
              RecordId={data?.MealPlanId?.toString()}
              IsDisplay={true}
            />
          </AccessControl>
          <AccessControl OtherCondition={data?.MealPlanId && IsAdvocate}>
            <Form.Setup.MealPlan
              RecordId={data?.MealPlanId?.toString()}
              IsDisplay={true}
              IsDetails={true}
            />
          </AccessControl>
        </div>
      </div>
      <CustomModal
        close={toggleModal}
        title={"Meal Plan Selection"}
        open={isModal}
        ClassName="md:w-[40rem] w-[80vw] h-fit max-h-[80vh] overflow-auto"
      >
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <div className=" mb-[1rem]">
              <div className="flex flex-row items-center gap-[1rem]">
                <div className="w-full  mb-3">
                  <AutoComplete
                    IsRequired={true}
                    Label="Select Meal Plan"
                    Values={mealplanId}
                    Options={mealplans}
                    Name="MealPlanId"
                    OptionName="Name"
                    Placeholder="Meal Plan"
                    OnChange={(_: any, value: MealPlanTable) => {
                      setMealPlanId(Number(value?.Id || 0));
                    }}
                    Touched={{}}
                  />
                  {err && (
                    <span className="text-[12px] font-medium text-red-400 ml-3">
                      {err}
                    </span>
                  )}
                </div>
                <CircleButton
                  Icon={<Icon.Add className="text-primary" />}
                  Type={ButtonType.button}
                  Title="New Meal Plan"
                  OnClick={() =>
                    navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN_NEW)
                  }
                />
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-end gap-[1rem]">
              <CustomButton
                text="Cancel"
                leftIcon={<Icon.Cancel className="text-primary" />}
                type={ButtonType.button}
                color={ButtonColor.default}
                onClick={() => {
                  setMealPlanId(0);
                  toggleModal();
                }}
              />
              <CustomButton
                text="Save"
                leftIcon={<Icon.Save />}
                type={ButtonType.button}
                onClick={() => {
                  if (mealplanId) {
                    const MealPlanRequest: MealPlanRequestTable = {
                      AdvocateId: data?.AdvocateId || 0,
                      NutritionistId: data?.NutritionistId || 0,
                      Remarks: data?.Remarks || null,
                      MealPlanId: mealplanId || 0,
                      CreatedBy: data?.CreatedBy || 0,
                      UpdatedBy: auth?.user || 0,
                    };
                    update(Number(Id), MealPlanRequest);
                    toggleModal();
                  } else setErr("Meal Plan is required");
                }}
              />
            </div>
          </>
        )}
      </CustomModal>
    </>
  );
};
export default memo(MealPlanRequestDetails);
