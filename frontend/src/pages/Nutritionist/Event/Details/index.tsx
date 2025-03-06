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
import Form from "../../../../components/Surfaces/Forms";

export const NutritionistEventDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
    {
      Text: "Events",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_EVENT),
    },
  ];

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar>
          <PageBreadCrumbs Links={links} Active="New Event" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Back className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.NUTRITIONIST_EVENT)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="w-full border-red">
          <Suspense fallback={<Skeleton />}>
            <Form.Public.Event IsDetails={true} Title="Event Details" />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};

export default memo(NutritionistEventDetailsPage);
