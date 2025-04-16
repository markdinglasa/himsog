import { memo } from "react";
import { SFC } from "../../../types";
import { cn } from "../../../utils";
import API from "../../../hooks/api";
import { useParams } from "react-router-dom";
import { Skeleton } from "../../Feedback";
import MealPlanMeals from "../MealPlanMeals";
import { CustomButton } from "../../Inputs";
import Icon from "../../../constants/icon";
import { AccessControl } from "..";
// import { useAuth } from "../../../hooks";

export const MealPlanDetails: SFC = ({ ClassName }) => {
  // const { auth } = useAuth();
  const { Id } = useParams<{ Id: string }>();
  const { data, isLoading } = API.Setup.MealPlan.Get(Number(Id));
  //const {data} = API.Setup
  if (isLoading) return <Skeleton />;
  return (
    <>
      <div className={cn("w-full", ClassName)}>
        <div className="w-full">
          <div className="w-full flex flex-col mb-[1rem]">
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-medium">{data?.Name ?? "NA"}</span>
              <CustomButton
                onClick={() => {}}
                leftIcon={<Icon.Cart />}
                text="Purchase"
                morph={false}
              />
            </div>
            <div className="flex flex-row items-center ">
              <span className="text-sm font-slate-600">
                {data?.Diet ?? "NA"}
              </span>
              <span className="font-bold text-2xl w-[1rem] items-center justify-center flex">
                ⋅
              </span>
              <span className="text-sm font-slate-600">
                {data?.Duration ?? "0"} Day(s)
              </span>
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm ">{data?.Description ?? "No Description"}</p>
          </div>
        </div>
        <div className="w-full mt-[1rem]">
          <AccessControl OtherCondition={false}>
            <MealPlanMeals IsDetails={true} IsDisplay={true} />
          </AccessControl>
        </div>
      </div>
    </>
  );
};
export default memo(MealPlanDetails);
