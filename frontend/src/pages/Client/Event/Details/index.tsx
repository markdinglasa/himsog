import { ButtonType, RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  CustomButton,
  PageBreadCrumbs,
  Skeleton,
} from "../../../../components";
import { cn } from "../../../../utils";
import { memo, Suspense } from "react";
import Icon from "../../../../constants/icon";
import Form from "../../../../components/Surfaces/Forms";
import { useNavigate } from "react-router-dom";

export const EventDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.CLIENT_DASHBOARD),
    },
    {
      Text: "Events",
      OnClick: () => navigate(RouteChannel.CLIENT_EVENT),
    },
  ];
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Event Details" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Back className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.CLIENT_EVENT)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="w-full rounded-md border">
          <Suspense fallback={<Skeleton />}>
            <Form.Public.Event
              IsDetails={true}
              Title="Event Details"
              ClassName="w-full"
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(EventDetailsPage);
