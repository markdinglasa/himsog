import { memo } from "react";
import { RouteChannel, SFC } from "../../../types";
import { cn, formatNumber } from "../../../utils";
import API from "../../../hooks/api";
import { useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "../../Feedback";
import MealPlanMeals from "../MealPlanMeals";
import { CustomButton } from "../../Inputs";
import Icon from "../../../constants/icon";
import { AccessControl } from "..";
import { useAuth } from "../../../hooks";
// import { useAuth } from "../../../hooks";

export const MealPlanDetails: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { Id } = useParams<{ Id: string }>();
  const { data, isLoading } = API.Setup.MealPlan.Get(Number(Id));

  const { data: isPaid, isLoading: paidLoading } =
    API.Setup.MealPlan.GetDetails(auth?.user ?? 0, Number(Id));
  console.log(isPaid);
  if (isLoading && paidLoading) return <Skeleton />;
  return (
    <>
      <div className={cn("w-full", ClassName)}>
        <div className="w-full">
          <div className="w-full flex flex-col mb-[1rem]">
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-medium">{data?.Name ?? "NA"}</span>
              <AccessControl OtherCondition={isPaid?.Status === "NA"}>
                <CustomButton
                  onClick={() =>
                    navigate(
                      RouteChannel.CLIENT_MEAL_PLAN_PAYMENT.replace(
                        ":Id",
                        String(Id),
                      ),
                    )
                  }
                  leftIcon={<Icon.Cart />}
                  text="Purchase"
                  morph={false}
                />
              </AccessControl>
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
          <AccessControl OtherCondition={isPaid?.Status === "Pending"}>
            <div className="w-full border p-2 rounded-md bg-orange-100 flex flex-row gap-2 items-center justify-start cursor-pointer">
              <Icon.Meal className="text-primary" />
              <span className="font-medium text-md text-center">
                Were almost there your meal plan is being processed.
              </span>
            </div>
          </AccessControl>
          <AccessControl OtherCondition={isPaid?.Status === "NA"}>
            <div
              onClick={() =>
                navigate(
                  RouteChannel.CLIENT_MEAL_PLAN_PAYMENT.replace(
                    ":Id",
                    String(Id),
                  ),
                )
              }
              className="w-full border p-2 rounded-md bg-blue-100 flex flex-row gap-2 items-center justify-start cursor-pointer"
            >
              <Icon.Key className="text-primary" />
              <span className="font-medium text-md text-center">
                Unlock all meals, try this meal plan now. for only{" "}
                {formatNumber(Number(data?.Price ?? 0))}
              </span>
            </div>
          </AccessControl>
          <AccessControl OtherCondition={true}>
            <div className="relative">
              <div className="z-10 w-full h-full absolute"></div>
              <MealPlanMeals
                IsDetails={true}
                IsDisplay={true}
                ClassName={isPaid?.Status === "Done" ? "" : "blur-lg"}
              />
            </div>
          </AccessControl>
        </div>
      </div>
    </>
  );
};
export default memo(MealPlanDetails);
