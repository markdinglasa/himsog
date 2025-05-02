import { ButtonType, RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  CustomButton,
} from "../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../utils";
import Icon from "../../../../constants/icon";
// import API from "../../../../hooks/api";

export const SubscriptionViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];
  // const { data: subscriptions, isLoading } = API.Setup.Subscription.GetAll();
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Subscription" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Add className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.NUTRITIONIST_INGREDIENT_NEW)}
              text="New"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="rounded-md border">
          <Suspense fallback={<Skeleton />}>
            <div className="w-full flex flex-wrap gap-3 mt-3">
              {/*isLoading ? (
                <Skeleton />
              ) : subscriptions?.length ? (
                subscriptions.map((record: SubscriptionTable) => (
                  <div key={record.Id?.toString()} className="w-full"></div>
                ))
              ) : (
                <div className="w-full text-center items-center">
                  <NoRecord Message="No Subscription" />
                </div>
              )*/}
            </div>
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(SubscriptionViewPage);
