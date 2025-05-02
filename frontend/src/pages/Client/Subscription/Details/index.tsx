import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { NoRecord, PageBreadCrumbs, Skeleton } from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn, formatNumber } from "../../../../utils";
import API from "../../../../hooks/api";

import Form from "../../../../components/Surfaces/Forms";
import { CustomModal } from "../../../../modals";
import { useToggle } from "../../../../hooks";
export const SubscriptionDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];
  const { Id } = useParams<{ Id: string }>();
  const { data: subscription, isLoading } = API.Setup.Subscription.GetByName(
    Id ?? "",
  );
  // console.log(subscription);
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Subscription" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Divider className="rounded-md  flex flex-col md:flex-row gap-[1rem] mb-[1rem] h-[calc(100vh-190px)]">
          <S.Divider className="w-full md:w-8/12 border bg-white p-[1rem] rounded-md h-full1">
            <S.Divider className="w-full flex flex-col items-start justify-center">
              <Form.Transaction.PaymentForm
                IsDetails={false}
                Title="Billing Info"
              />
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full md:w-4/12 border h-fit bg-white p-[1rem] rounded-md flex flex-col">
            <span className="text-lg font-medium">Subscription Details</span>
            <Suspense fallback={<Skeleton />}>
              <div className="w-full mt-[1rem] rounded-md">
                {isLoading ? (
                  <Skeleton />
                ) : (
                  <>
                    {subscription ? (
                      <div className="w-full flex flex-col">
                        <div className="flex items-center flex-row  justify-between">
                          <span>Subscription Plan : </span>
                          <span className="font-medium">
                            {subscription?.Name ?? "NA"}
                          </span>
                        </div>
                        <div className="flex items-center flex-row justify-between">
                          <span>Description:</span>
                          <span className="font-medium">
                            {subscription?.Description ?? "NA"}
                          </span>
                        </div>
                        <div className="flex items-center flex-row justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">
                            {subscription?.Duration ?? "NA"} day(s)
                          </span>
                        </div>
                        <div className="flex items-center flex-row justify-between">
                          <span>Price:</span>
                          <span className="font-medium">
                            {formatNumber(Number(subscription?.Price ?? 0))}
                          </span>
                        </div>
                        <div className="flex border-t mt-[1rem] items-center flex-row justify-between">
                          <span className="text-lg">TOTAL:</span>
                          <span className="text-lg font-medium">
                            {formatNumber(Number(subscription?.Price ?? 0))}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <NoRecord Message={"No Subscription Found"} />
                    )}
                  </>
                )}
              </div>
            </Suspense>
          </S.Divider>
        </S.Divider>
      </S.Container>
      <CustomModal
        close={toggleDisplay}
        title="Subscription Payment"
        open={isDisplay}
      >
        <div>form</div>
      </CustomModal>
    </>
  );
};
export default memo(SubscriptionDetailsPage);
