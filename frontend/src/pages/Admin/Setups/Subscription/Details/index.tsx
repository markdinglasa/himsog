import { ButtonType, RouteChannel, SFC } from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  CustomButton,
} from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import Form from "../../../../../components/Surfaces/Forms";
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
      </S.Container>
    </>
  );
};

export default memo(AdminSubscriptionDetailsPage);
