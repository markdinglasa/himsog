import {
  APIChannel,
  ButtonType,
  HeadCell,
  QueryKey,
  RouteChannel,
  SFC,
  subscriptionLineHC,
} from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  CustomButton,
  EnhancedTable,
} from "../../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import Form from "../../../../../components/Surfaces/Forms";
import API from "../../../../../hooks/api";

export const AdminSubscriptionDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
    {
      Text: "Subscriptions",
      OnClick: () => navigate(RouteChannel.ADMIN_SUBSCRIPTION),
    },
  ];
  const { Id } = useParams<{ Id: string }>();
  const { data: subscribers, isLoading } = API.Setup.SubscriptionLine.GetAll(
    Number(Id),
  );
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar>
          <PageBreadCrumbs Links={links} Active="Subscription Details" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Back className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_SUBSCRIPTION)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md border-slate-200">
          <Suspense fallback={<Skeleton />}>
            <Form.Setup.Subscription
              IsDetails={true}
              Title="Subscription Details"
            />
          </Suspense>
        </S.PageContent>
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Subscribers"
              Rows={subscribers ?? []}
              HeadCells={subscriptionLineHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              OnRecordDelete={() => {}}
              RemoveApiRoute={APIChannel.SUBSCRIPTION_LINE_ID}
              // DetailsRoute={RouteChannel.ADMIN_SUBSCRIPTION_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
              QueryKey={QueryKey.SUBSCRIPTION_LINE}
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};

export default memo(AdminSubscriptionDetailsPage);
