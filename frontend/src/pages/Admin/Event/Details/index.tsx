import { ButtonColor, ButtonType, RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  CustomButton,
  ConfirmationDialog,
} from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../utils";
import Icon from "../../../../constants/icon";
import EventDetails from "../../../../components/DataDisplay/EventDetails";
import API from "../../../../hooks/api";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../modals";
import Form from "../../../../components/Surfaces/Forms";

export const EventDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
    {
      Text: "Events",
      OnClick: () => navigate(RouteChannel.ADMIN_EVENT),
    },
  ];
  const { Id } = useParams<{ Id: string }>();
  const { data, isLoading } = API.Setup.Event.Get(Number(Id));
  const { update } = API.Setup.Event.Update();
  const [isApprove, toggleApprove] = useToggle(false);
  const [isDisapprove, toggleDisapprove] = useToggle(false);

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar>
          <PageBreadCrumbs Links={links} Active="Event Details" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Back className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_EVENT)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="w-full border rounded-md ">
          <Suspense fallback={<Skeleton />}>
            <EventDetails Data={data} Loading={isLoading} IsPublic={false} />
          </Suspense>
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
              onClick={toggleApprove}
              text="Approve"
              type={ButtonType.button}
            />
          </S.Divider>
        </S.PageContent>
      </S.Container>
      <ConfirmationDialog
        title="Validate Event"
        message="Are you sure you want to Validate this event?"
        close={toggleApprove}
        open={isApprove}
        confirm={() => {
          // Toggle
          if (data) {
            data.IsValidated = true;
          }
          // console.log(data);
          const { Id, ...filtered } = data;

          update(Number(data.Id), filtered);

          toggleApprove();
        }}
      />
      <CustomModal
        close={toggleDisapprove}
        title={"Disapprove Event"}
        open={isDisapprove}
        ClassName="w-[80vw] md:w-[40rem]"
      >
        <Form.Setup.DisapproveEvent />
      </CustomModal>
    </>
  );
};

export default memo(EventDetailsPage);
