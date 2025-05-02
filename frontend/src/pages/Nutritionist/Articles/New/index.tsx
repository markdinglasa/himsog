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
import Form from "../../../../components/Surfaces/Forms";

export const NutritionistArticleNewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
    {
      Text: "Health Articles",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_ARTICLE),
    },
  ];

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="New Health Article" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Back className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.NUTRITIONIST_ARTICLE)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="rounded-md border">
          <Suspense fallback={<Skeleton />}>
            <Form.Public.Article ClassName="w-full" />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(NutritionistArticleNewPage);
