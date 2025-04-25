import { memo } from "react";
import { AccessControl } from "..";
import { FormProps, Roles, SFC } from "../../../types";
import { cn, renderPath } from "../../../utils";
import MealPlanDetails from "../MealPlanDetails";
import API from "../../../hooks/api";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { CustomButton } from "../../Inputs";
import Icon from "../../../constants/icon";
import { useAuth } from "../../../hooks";

export const MealPlanRequestDetails: SFC<FormProps> = ({
  ClassName,
  IsAdvocate = false,
}) => {
  const { Id } = useParams<{ Id: string }>();
  const { data } = API.Transaction.MealPlanRequest.Get(Number(Id));
  const navigate = useNavigate();
  const { auth } = useAuth();
  const path = renderPath(auth?.roles as Roles);
  return (
    <>
      <div className={cn("w-full flex flex-col", ClassName)}>
        <div className="w-full">
          <span className="text-lg font-medium">
            Meal Plan - Request Details
          </span>
        </div>
        <div className="w-full p-[1rem] rounded-md my-[1rem] flex flex-row gap-[1rem] border">
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
            <div>
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
          <AccessControl OtherCondition={!data?.MealPlanId && IsAdvocate}>
            <div className="w-full flex items-center justify-between">
              <span className="text-lg font-medium">Meal Plan</span>
              <CustomButton text="New" />
            </div>
          </AccessControl>
          <AccessControl OtherCondition={data?.MealPlanId && IsAdvocate}>
            <MealPlanDetails RecordId={data?.MealPlanId} />
          </AccessControl>
        </div>
      </div>
    </>
  );
};
export default memo(MealPlanRequestDetails);
