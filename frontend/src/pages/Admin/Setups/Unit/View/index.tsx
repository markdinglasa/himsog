import {
  APIChannel,
  ButtonType,
  HeadCell,
  QueryKey,
  RouteChannel,
  SFC,
  ToastType,
  unitHC,
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
import { useAxiosPrivate } from "../../../../../hooks";
import { useQuery } from "@tanstack/react-query";
import { Error } from "../../../../../shared";

export const AdminUnitViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];
  const axios = useAxiosPrivate();
  const {
    data: units,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QueryKey.UNIT],
    queryFn: async () => axios.get(`${APIChannel.UNIT}`), // fetch data
  }); // on delete of a record it wont refetch
  if (isError) {
    displayToast(units?.data?.message || Error.m00001, ToastType.error);
  }
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Users" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Add className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_UNIT_NEW)}
              text="New"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Units"
              Rows={units?.data?.data || []}
              HeadCells={unitHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              OnRecordDelete={() => {}}
              RemoveApiRoute={APIChannel.UNIT_ID}
              QueryKey={QueryKey.UNIT}
              DetailsRoute={RouteChannel.ADMIN_UNIT_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(AdminUnitViewPage);
