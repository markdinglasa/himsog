import { Fragment, memo, Suspense } from "react";
import { ButtonType, SFC, UserProgress } from "../../../types";
import { cn, formatDateToMMDDYY } from "../../../utils";
import { DoughnutChart } from "../Charts";
import { useAuth } from "../../../hooks";
import MealPlanDetails from "../MealPlanDetails";
import API from "../../../hooks/api";
import { Skeleton } from "../../Feedback";
import { NoRecord } from "../Tables";
import { AccessControl } from "..";
import Icon from "../../../constants/icon";
import { CircleButton, CustomButton } from "../../Inputs";
import { useToggle } from "react-use";
import { CustomModal } from "../../../modals";
import Form from "../../../components/Surfaces/Forms";

export const ActiveMealPlan: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const [isModal, toggleModal] = useToggle(false);
  const { data: activeMealPlan, refetch } =
    API.Transaction.UserMealPlan.GetActiveByUser(Number(auth?.user ?? 0));
  //const [isCompleted, setIsCompleted] = useState<boolean>(false)
  const { data: progress } = API.Transaction.userProgress.GetAll(
    Number(activeMealPlan?.MealPlanId ?? 0),
  );
  const { remove: removeProgress } = API.Transaction.userProgress.Remove();
  console.log(progress);
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
      ? parseFloat(`${((completed / incomplete) * 100).toFixed(2)}`)
      : "0.00";
  };
  const isCompleted: boolean = Number(activeMealPlan?.Incomplete ?? 0) === 0;
  const isWeekly: boolean = Number(activeMealPlan?.Completed ?? 0) % 7 === 0;
  return (
    <>
      <div className={cn("w-full", ClassName)}>
        <div className="w-full flex flex-col md:flex-row gap-[1rem] ">
          <div className="w-full flex flex-col gap-[1rem] md:w-8/12 items-start justify-start rounded-md border bg-white p-[1rem]">
            <AccessControl OtherCondition={isCompleted}>
              <div className="w-full border h-12 rounded-md bg-green-100 flex items-center p-[1rem] gap-2">
                <Icon.Celebration className="text-primary" />
                <span>Congrats! your meal plan is now complete.</span>
              </div>
            </AccessControl>
            <Suspense fallback={<Skeleton />}>
              <MealPlanDetails
                IsComplete={isCompleted}
                IsDisplay={true}
                RecordId={String(activeMealPlan?.MealPlanId ?? 0)}
                OnRefetch={() => refetch()}
              />
            </Suspense>
          </div>
          <div className="w-full md:w-4/12 flex h-fit  flex-col flex items-center justify-center  relative">
            <div className="flex h-fit  flex-col flex items-center justify-center rounded-md border bg-white p-[1rem] relative w-full mb-[1rem]">
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
                  isProgressReport={true}
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
            <div className="w-full p-[1rem] flex flex-col">
              <div className="mb-[1rem]">
                <span className="text-md font-medium">Weekly Progress</span>
              </div>
              <div>
                <CustomButton
                  disabled={isWeekly}
                  text="New"
                  leftIcon={<Icon.Add />}
                  ClassName="w-full"
                  onClick={toggleModal}
                  type={ButtonType.button}
                />
              </div>
              <div className="w-full flex flex-col gap-2 mt-2">
                <Suspense fallback={<Skeleton />}>
                  {progress?.length > 0 ? (
                    progress.map((record: UserProgress, index: number) => {
                      return (
                        <Fragment key={index}>
                          <div className="w-full border rounded-md p-2 flex justify-between items-center hover:bg-slate-100 duration-300 ease-in-out">
                            <div className="flex flex-col">
                              <div>
                                <span className="text-sm ">BMI :</span>
                                <span className="text-sm font-medium ml-3">
                                  {parseFloat(`${record.BMI}`)}
                                </span>
                              </div>
                              <div className="-mt-2">
                                <span className="text-[12px]">
                                  {formatDateToMMDDYY(record.DateCreated)}
                                </span>
                              </div>
                            </div>

                            <div>
                              <CircleButton
                                Icon={<Icon.Delete className="text-primary" />}
                                Type={ButtonType.button}
                                OnClick={() =>
                                  removeProgress(Number(record.Id ?? 0))
                                }
                              />
                            </div>
                          </div>
                        </Fragment>
                      );
                    })
                  ) : (
                    <NoRecord Message={"No Progress"} />
                  )}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        close={toggleModal}
        title={"Weekly Progress"}
        open={isModal}
        ClassName="md:w-[40rem] max-h-[80vh] h-fit w-[80vw]"
      >
        <div>
          <Form.Transaction.UserProgress
            OnClose={toggleModal}
            RecordId={String(activeMealPlan?.MealPlanId ?? 0)}
          />
        </div>
      </CustomModal>
    </>
  );
};
export default memo(ActiveMealPlan);
