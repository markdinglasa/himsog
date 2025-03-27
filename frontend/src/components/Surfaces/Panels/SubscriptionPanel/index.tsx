import {
  ButtonColor,
  RouteChannel,
  SFC,
  SubscriptionLineTable,
  ToastType,
} from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  cn,
  displayToast,
  formatDateForInput,
  formatDateToMMDDYY,
  formatNumber,
  IsBoolean,
} from "../../../../utils";
import { memo } from "react";
import { FeedbackEmail, StaticSubscription } from "../../../DataDisplay";
import { useNavigate } from "react-router-dom";
import API from "../../../../hooks/api";
import { useAuth } from "../../../../hooks";
import { ConfirmationDialog, Skeleton } from "../../../Feedback";
import { CustomButton } from "../../../Inputs";
import { useToggle } from "react-use";

export const SubscriptionPanel: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const { update } = API.Setup.SubscriptionLine.Update();
  const { auth } = useAuth();
  const { data: UserSubs, isLoading } = API.Setup.SubscriptionLine.GetByUser(
    Number(auth?.user ?? 0),
  );
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.Content className="w-full">
          <S.Divider>
            <span className="text-lg font-medium">Subscription Plan</span>
          </S.Divider>
          <S.Divider className="flex flex-wrap">
            <S.Span className="text-sm text-slate-600">
              View and manage your subscriptions to keep receiving newsletters,
              product tips, and more. Some subscriptions may not be listed here.
            </S.Span>
            <S.Span
              className="ml-2 text-sm text-blue-600 cursor-pointer"
              onClick={() => navigate(RouteChannel.ABOUT_US)}
            >
              Learn more
            </S.Span>
          </S.Divider>
          <S.Divider>
            {isLoading ? (
              <Skeleton />
            ) : UserSubs && UserSubs.Id ? (
              <>
                <div className="w-full mt-[1rem]">
                  <div className="w-full rounded-mg">
                    <div className="flex flex-col w-full">
                      <div className="w-full  flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-lg font-medium">
                            {UserSubs?.SubscriptionName ?? ""}
                          </span>
                          <span className="text-sm text-slate-600">
                            {formatNumber(
                              parseFloat(UserSubs?.SubscriptionPrice ?? 0),
                            )}
                            , billed monthly
                          </span>
                        </div>
                        <span
                          className={cn(
                            UserSubs?.Status === "Active"
                              ? "border border-green-500 bg-green-100 text-green-500"
                              : "border -500 bg-red-100 text-red-500",
                            "px-5 py-1 rounded-full uppercase font-medium",
                          )}
                        >
                          {UserSubs?.Status}
                        </span>
                      </div>
                      <span className="text-sm text-slate-600 mt-[1rem]">
                        Started: {formatDateToMMDDYY(UserSubs?.DateStart ?? "")}
                      </span>
                      <span className="text-sm text-slate-600">
                        Next Billing Date:{" "}
                        {formatDateToMMDDYY(UserSubs?.DateEnd ?? "")}
                      </span>
                    </div>
                    <div className="w-full  py-2 mt-[1rem] flex items-center flex-row justify-between">
                      <div className="flex flex-col ">
                        <span className="text-lg font-medium text-red-400">
                          Cancel Subscription
                        </span>
                        <span className="text-sm text-slate-600">
                          Subscription may cancel anytime.
                        </span>
                      </div>
                      <CustomButton
                        onClick={toggleDisplay}
                        text="Cancel Plan"
                        color={ButtonColor.red}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <StaticSubscription onClick={() => {}} />
            )}
          </S.Divider>
          <S.Divider>
            <FeedbackEmail />
          </S.Divider>
        </S.Content>
      </S.Container>
      <ConfirmationDialog
        title="Cancel Subscription"
        message={`Are you sure you want to cancel your '${UserSubs?.SubscriptionName}' subscription? This action cannot be undone and you will lose access to all benefits associated with this subscription.`}
        close={toggleDisplay}
        open={isDisplay}
        confirm={() => {
          try {
            const data: SubscriptionLineTable = {
              SubscriptionId: UserSubs?.SubscriptionId || 0,
              UserId: UserSubs?.UserId || 0,
              DateStart: formatDateForInput(UserSubs?.DateStart) || "",
              DateEnd: formatDateForInput(UserSubs?.DateEnd) || "",
              IsCancelled: true,
            };
            update(UserSubs?.Id ?? 0, data);
          } catch (error: any) {
            displayToast(error.message, ToastType.error);
          } finally {
            toggleDisplay();
          }
        }}
      />
    </>
  );
};
export default memo(SubscriptionPanel);
