import {
  APIChannel,
  ButtonType,
  HeadCell,
  ingredientHC,
  IngredientTables,
  QueryKey,
  RouteChannel,
  SFC,
} from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  PageBreadCrumbs,
  EnhancedTable,
  Skeleton,
  CustomButton,
} from "../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../utils";
import Icon from "../../../../constants/icon";
import API from "../../../../hooks/api";

export const IngredientViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];
  const { data, isLoading } = API.Setup.Ingredient.GetAll();
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Ingredients" />
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
            <EnhancedTable
              Title="Ingredients"
              Rows={(data as IngredientTables) ?? []}
              HeadCells={ingredientHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              RemoveApiRoute={APIChannel.INGREDIENT_ID}
              DetailsRoute={RouteChannel.NUTRITIONIST_INGREDIENT_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
              QueryKey={QueryKey.INGREDIENT}
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(IngredientViewPage);
