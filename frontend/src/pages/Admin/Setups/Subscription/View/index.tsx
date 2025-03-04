import {
  ButtonType,
  HeadCell,
  QueryKey,
  RouteChannel,
  SFC,
  subscriptionHC,
} from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  EnhancedTable,
  Skeleton,
  CustomButton,
} from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../../utils";
import Icon from "../../../../../constants/icon";

export const AdminSubscriptionViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Subscriptions" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Add className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_SUBSCRIPTION_NEW)}
              text="New"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Subscriptions"
              Rows={[]}
              HeadCells={subscriptionHC as HeadCell<unknown>[]}
              IsLoading={false}
              OnRecordDelete={() => {}}
              //RemoveApiRoute={RouteChannel.NO_ACCESS_RIGHT}
              DetailsRoute={RouteChannel.ADMIN_SUBSCRIPTION_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
              QueryKey={QueryKey.SUBSCRIPTION}
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(AdminSubscriptionViewPage);
