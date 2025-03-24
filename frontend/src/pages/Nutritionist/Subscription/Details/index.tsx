import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  CustomButton,
  NoRecord,
  PageBreadCrumbs,
  Skeleton,
} from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn, formatNumber } from "../../../../utils";
import API from "../../../../hooks/api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
  const [isDisplay, toggleDisplay] = useToggle(false);
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
              <span className="w-full text-lg font-medium">
                {subscription?.Name ?? "NA"}
              </span>
              <div className="w-full flex justify-between">
                <span className="text-lg">+</span>
                <span className="text-lg">
                  {formatNumber(subscription?.price ?? 0)}
                </span>
              </div>
              <div className="w-full mt-[1rem]">
                <CustomButton
                  text="Pay Now"
                  ClassName="w-full"
                  leftIcon={<ShoppingCartIcon className="text-white" />}
                  onClick={toggleDisplay}
                />
              </div>
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full md:w-4/12 border bg-white p-[1rem] rounded-md flex flex-col">
            <span className="text-lg font-medium">Subscription Details</span>
            <Suspense fallback={<Skeleton />}>
              <div className="w-full p-3 rounded-md">
                {isLoading ? (
                  <Skeleton />
                ) : (
                  <>
                    {subscription && subscription.length > 0 ? (
                      <div className="w-full flex flex-col">
                        <span>{subscription?.Name ?? "NA"}</span>
                        <span>{subscription?.Description ?? "NA"}</span>
                        <span>{subscription?.Duration ?? "NA"} day(s)</span>
                        <span>{formatNumber(subscription?.price ?? 0)}</span>
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
