import {
  APIChannel,
  ButtonType,
  HeadCell,
  ingredientHC,
  RouteChannel,
  SFC,
  ToastType,
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
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { useQuery } from "@tanstack/react-query";
import { useAxiosPrivate } from "../../../../../hooks";
import { BASE_URL, Error } from "../../../../../shared";

export const AdminIngredientViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];
  const axios = useAxiosPrivate();
  const {
    data: ingredients,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["ingredient"],
    queryFn: async () => axios.get(`${BASE_URL}/setup/user/get-all`), // fetch data
  });
  if (isError) {
    displayToast(ingredients?.data?.message || Error.m00001, ToastType.error);
  }

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Users" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Add className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_INGREDIENT_NEW)}
              text="New"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="rounded-md border">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Ingredients"
              Rows={ingredients?.data?.data || []}
              HeadCells={ingredientHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              OnRecordDelete={() => {}}
              RemoveApiRoute={APIChannel.INGREDIENT_REMOVE}
              DetailsRoute={RouteChannel.ADMIN_INGREDIENT_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(AdminIngredientViewPage);
