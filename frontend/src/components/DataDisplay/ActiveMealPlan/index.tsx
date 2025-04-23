import { memo, Suspense } from "react";
import { SFC } from "../../../types";
import { cn } from "../../../utils";
import { DoughnutChart } from "../Charts";
import { useAuth } from "../../../hooks";
import MealPlanDetails from "../MealPlanDetails";
import API from "../../../hooks/api";
import { Skeleton } from "../../Feedback";
import { NoRecord } from "../Tables";

export const ActiveMealPlan: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const { data: activeMealPlan } = API.Transaction.UserMealPlan.GetActiveByUser(
    Number(auth?.user ?? 0),
  );

  if (!(activeMealPlan?.MealPlanId ?? 0))
    return (
      <>
        <div className="w-full border rounded-md p-[1rem] bg-white flex items-center justify-center h-[200px]">
          <NoRecord Message={"No Active Meal Plan"} />
        </div>
      </>
    );
  const progressComplete = () => {
    const completed = activeMealPlan?.Completed ?? 0;
    const incomplete = activeMealPlan?.Duration ?? 0;
    return incomplete > 0
      ? ((completed / incomplete) * 100).toFixed(2)
      : "0.00";
  };

  //console.log(progressComplete);
  return (
    <>
      <div className={cn("w-full", ClassName)}>
        <div className="w-full flex flex-col md:flex-row gap-[1rem] ">
          <div className="w-full flex flex-col gap-[1rem] md:w-8/12 items-start justify-start rounded-md border bg-white p-[1rem]">
            <Suspense fallback={<Skeleton />}>
              <MealPlanDetails
                IsDisplay={true}
                RecordId={String(activeMealPlan?.MealPlanId ?? 0)}
              />
            </Suspense>
          </div>
          <div className="w-full md:w-4/12 flex h-fit  flex-col flex items-center justify-center rounded-md border bg-white p-[1rem] relative">
            <div className="w-full">
              <span className="text-md font-medium"> Progress </span>
            </div>
            <div className="w-full">
              <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 ">
                <span className="text-md font-medium mt-5">
                  {progressComplete()}% completed
                </span>
              </div>
              <DoughnutChart
                id="progress-chart"
                category="Progress Report"
                ClassName="w-full "
                data={[
                  {
                    Name: "Completed",
                    NameCount: activeMealPlan?.Completed ?? 0,
                  },
                  {
                    Name: "Incomplete",
                    NameCount: activeMealPlan?.Incomplete ?? 0,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(ActiveMealPlan);
