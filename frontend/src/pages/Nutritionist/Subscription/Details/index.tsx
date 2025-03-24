import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { PageBreadCrumbs, Skeleton } from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn, formatNumber } from "../../../../utils";
import API from "../../../../hooks/api";

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
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Subscription" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Divider className="rounded-md  flex flex-row gap-[1rem] mb-[1rem] h-[calc(100vh-190px)]">
          <S.Divider className="w-full md:w-8/12 border bg-white p-[1rem] rounded-md">
            <S.Divider className="w-full flex flex-col items-start justify-center">
              <span className="text-lg font-medium">Subscription Details</span>
              <Suspense fallback={<Skeleton />}>
                <div className="w-full p-3 rounded-md">
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <>
                      <div className="w-full flex flex-col">
                        <span>{subscription?.Name}</span>
                        <span>{subscription?.Description}</span>
                        <span>{subscription?.Duration} day(s)</span>
                        <span>{formatNumber(subscription?.price)} </span>
                      </div>
                    </>
                  )}
                </div>
              </Suspense>
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full md:w-4/12 border bg-white p-[1rem] rounded-md">
            <span>Free</span>
          </S.Divider>
        </S.Divider>
      </S.Container>
    </>
  );
};
export default memo(SubscriptionDetailsPage);
