import {
  APIChannel,
  ButtonType,
  HeadCell,
  RouteChannel,
  SFC,
  ToastType,
  userHC,
} from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  EnhancedTable,
  Skeleton,
  CustomButton,
} from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { useQuery } from "@tanstack/react-query";
import { useAxiosPrivate } from "../../../../../hooks";
import { BASE_URL, Error } from "../../../../../shared";

export const AdminUserViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];
  const axios = useAxiosPrivate();
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => axios.get(`${BASE_URL}/setup/user/get-all`), // fetch data
  });
  if (isError) {
    displayToast(users?.data?.message || Error.m00001, ToastType.error);
  }
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Users" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Add className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_USER_NEW)}
              text="New"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Users"
              Rows={users?.data?.data || []}
              HeadCells={userHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              OnRecordDelete={() => {}}
              RemoveApiRoute={APIChannel.USER_REMOVE}
              DetailsRoute={RouteChannel.ADMIN_USER_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default AdminUserViewPage;
