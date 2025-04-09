import {
  APIChannel,
  ButtonColor,
  ButtonType,
  HeadCell,
  QueryKey,
  RequestAccessHC,
  RequestAccessTable,
  RouteChannel,
  SFC,
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
import { cn } from "../../../../../utils";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";
import Form from "../../../../../components/Surfaces/Forms";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../../modals";
import { useGlobal } from "../../../../../hooks";

export const RequestAccessViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];
  const { data: requests, isLoading } = API.Transaction.RequestAccess.GetAll();
  const [isDisplay, toggleDisplay] = useToggle(false);
  const [isDisapprove, toggleDisapprove] = useToggle(false);
  const { record } = useGlobal();
  const RequestAccess: RequestAccessTable = record?.Record ?? {};
  const { update } = API.Transaction.RequestAccess.Update();
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Request Access" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Request Access"
              Rows={requests ?? []}
              HeadCells={RequestAccessHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              OnRecordDelete={() => {}}
              RemoveApiRoute={APIChannel.REQUEST_ACCESS_ID}
              QueryKey={QueryKey.REQUEST_ACCESS}
              IsModal={true}
              IsRecord={true}
              ToggleModal={toggleDisplay}
              ClassName="md:max-h-[calc(100vh-200px)]"
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
      <CustomModal
        close={toggleDisplay}
        title="Request Access"
        open={isDisplay}
        ClassName="w-[80vw] md:w-[40rem]"
      >
        <S.Divider className="w-full ">
          <S.Span>
            {RequestAccess?.Email ?? ""} has requested to create an{" "}
            {RequestAccess.ArticleId ? "Article" : ""}
            {RequestAccess.EventId ? "Event" : ""}, Do you want to approve this
            request?"
          </S.Span>
        </S.Divider>
        <S.Divider className="w-full flex flex-row items-center justify-end gap-[1rem]">
          <CustomButton
            leftIcon={<Icon.Close className="md:text-white text-primary" />}
            onClick={toggleDisapprove}
            text="Disapprove"
            type={ButtonType.button}
            color={ButtonColor.red}
          />
          <CustomButton
            leftIcon={
              <Icon.CheckCircle className="md:text-white text-primary" />
            }
            onClick={() => {
              const Data: RequestAccessTable = {
                Email: RequestAccess?.Email,
                IsApproved: true,
                Token: "",
                Remarks: null,
                EventId: RequestAccess?.EventId ?? 0,
                ArticleId: RequestAccess?.ArticleId ?? 0,
              };
              update(Number(RequestAccess?.Id ?? 0), Data);
              toggleDisplay();
            }}
            text="Approve"
            type={ButtonType.button}
          />
        </S.Divider>
      </CustomModal>
      <CustomModal
        close={toggleDisapprove}
        title="Disapprove Request Access"
        open={isDisapprove}
        ClassName="w-[80vw] md:w-[40rem]"
      >
        <S.Divider className="w-full">
          <Form.Public.RequestAccess
            Record={RequestAccess}
            IsDisapprove={true}
            OnClose={toggleDisapprove}
          />
        </S.Divider>
      </CustomModal>
    </>
  );
};
export default memo(RequestAccessViewPage);
