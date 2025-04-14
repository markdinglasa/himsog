import { ButtonType, RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  CustomButton,
  PageBreadCrumbs,
  Skeleton,
} from "../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../utils";
// import API from "../../../../hooks/api";
import Form from "../../../../components/Surfaces/Forms";
import Icon from "../../../../constants/icon";

export const MealDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Meal Details" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Back className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.NUTRITIONIST_MEAL)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="rounded-md border">
          <Suspense fallback={<Skeleton />}>
            <Form.Setup.Meal
              Title="Meal Details"
              ClassName="w-full"
              IsDetails={true}
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(MealDetailsPage);
