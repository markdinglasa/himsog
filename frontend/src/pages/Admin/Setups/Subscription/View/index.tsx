import {
  ButtonType,
  HeadCell,
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
import { Suspense } from "react";
import { cn } from "../../../../../utils";
import AddIcon from "@mui/icons-material/Add";

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
              leftIcon={<AddIcon className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_SUBSCRIPTION_NEW)}
              text="New"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent>
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
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
