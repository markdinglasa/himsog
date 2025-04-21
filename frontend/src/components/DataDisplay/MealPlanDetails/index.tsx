import { memo } from "react";
import { ButtonColor, RouteChannel, SFC } from "../../../types";
import { cn, formatNumber } from "../../../utils";
import API from "../../../hooks/api";
import { useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "../../Feedback";
import MealPlanMeals from "../MealPlanMeals";
import { CustomButton } from "../../Inputs";
import Icon from "../../../constants/icon";
import { AccessControl } from "..";
import { useAuth } from "../../../hooks";
import { CustomModal } from "../../../modals";
import { useToggle } from "react-use";
// import { useAuth } from "../../../hooks";
import Form from "../../Surfaces/Forms";

export const MealPlanDetails: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { Id } = useParams<{ Id: string }>();
  const { data, isLoading } = API.Setup.MealPlan.Get(Number(Id));

  const { data: isPaid, isLoading: paidLoading } =
    API.Setup.MealPlan.GetDetails(auth?.user ?? 0, Number(Id));
  const [isModal, toggleModal] = useToggle(false);

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
              <AccessControl OtherCondition={isPaid?.Status === "Approved"}>
                <div className="flex flex-row gap-[1rem]">
                  <AccessControl OtherCondition={!(isPaid?.IsRated ?? false)}>
                    <CustomButton
                      onClick={toggleModal}
                      leftIcon={<Icon.Star className="text-primary" />}
                      text="Rate"
                      morph={false}
                      color={ButtonColor.default}
                    />
                  </AccessControl>
                  <AccessControl OtherCondition={isPaid?.IsRated ?? false}>
                    <CustomButton
                      onClick={toggleModal}
                      leftIcon={<Icon.Star className="text-primary" />}
                      text="View Rating"
                      morph={false}
                      color={ButtonColor.default}
                    />
                  </AccessControl>
                  <CustomButton
                    onClick={() => {}}
                    leftIcon={<Icon.CheckCircle />}
                    text="Activate"
                    morph={false}
                    disabled={isPaid?.IsActive ?? false}
                  />
                </div>
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
              <AccessControl OtherCondition={isPaid?.Status !== "Approved"}>
                <div className="z-10 w-full h-full absolute"></div>
              </AccessControl>
              <MealPlanMeals
                IsDetails={true}
                IsDisplay={true}
                ClassName={isPaid?.Status === "Approved" ? "" : "blur-lg"}
              />
            </div>
          </AccessControl>
        </div>
      </div>
      <CustomModal
        close={toggleModal}
        title={isPaid?.IsRated ? "Your Meal Plan Rating" : "Write a rating"}
        open={isModal}
        ClassName="md:w-[40rem] w-[80vw] max-h-[80vh] h-fit"
      >
        <div>
          <Form.Transaction.MealPlanRating
            Title=""
            OnClose={toggleModal}
            IsDisplay={isPaid?.IsRated ?? false}
          />
        </div>
      </CustomModal>
    </>
  );
};
export default memo(MealPlanDetails);
