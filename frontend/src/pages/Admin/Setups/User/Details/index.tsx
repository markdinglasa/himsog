import {
  ButtonColor,
  ButtonType,
  RouteChannel,
  SFC,
} from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  CustomButton,
} from "../../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { Suspense } from "react";
import { cn } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import Form from "../../../../../components/Surfaces/Forms";
import API from "../../../../../hooks/api";

export const AdminUserDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
    { Text: "Users", OnClick: () => navigate(RouteChannel.ADMIN_USER) },
  ];

  const { Id } = useParams<{ Id: string }>();
  const { update } = API.Setup.User.SuspendUser();
  const { data } = API.Setup.User.Get(Number(Id));
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar>
          <PageBreadCrumbs Links={links} Active="User Details" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Back className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_USER)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md ">
          <Suspense fallback={<Skeleton />}>
            <Form.Setup.User
              IsSetup={false}
              IsRedirect={false}
              IsDetails={true}
              Title="User Details"
              ClassName="w-full mb-3"
            />
          </Suspense>
          <S.Divider className="w-full flex flex-row items-center justify-end ">
            {(data?.IsSuspended ?? false) ? (
              <CustomButton
                text={"Activate"}
                color={ButtonColor.primary}
                onClick={() => {
                  update(Number(Id), { IsSuspended: false });
                }}
              />
            ) : (
              <CustomButton
                text={"Suspend"}
                color={ButtonColor.red}
                onClick={() => {
                  update(Number(Id), { IsSuspended: true });
                }}
              />
            )}
          </S.Divider>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default AdminUserDetailsPage;
