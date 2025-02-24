import { ButtonType, RouteChannel, SFC } from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  CustomButton,
} from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { cn } from "../../../../../utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const AdminSubscriptionNewPage: SFC = ({ ClassName }) => {
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
          <PageBreadCrumbs Links={links} Active="New Subscription" />
          <S.Actions>
            <CustomButton
              leftIcon={
                <ArrowBackIcon className="md:text-white text-primary" />
              }
              onClick={() => navigate(RouteChannel.ADMIN_SUBSCRIPTION)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent>
          <Suspense fallback={<Skeleton />}></Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};

export default AdminSubscriptionNewPage;
