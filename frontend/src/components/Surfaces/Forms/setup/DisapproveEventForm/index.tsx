import {
  ButtonColor,
  ButtonType,
  EventTable,
  FormProps,
  NotificationTable,
  Roles,
  SFC,
  ToastType,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { CustomButton } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast, renderPath } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { memo } from "react";
import { eventValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useParams } from "react-router-dom";
import { Skeleton } from "../../../../Feedback";
import { useAuth } from "../../../../../hooks";

export const DisapproveEventForm: SFC<FormProps> = ({
  ClassName,
  Title,
  OnClose,
}) => {
  const { Id } = useParams<{ Id: string }>();
  const { update } = API.Setup.Event.Update();
  const { data, isLoading } = API.Setup.Event.Get(Number(Id));
  const { add } = API.Utility.Notification.Add();
  const { data: user } = API.Setup.User.Get(Number(data?.CreatedBy));
  const { auth } = useAuth();

  const InitialValues: EventTable = {
    Title: data?.Title || "",
    Category: data?.Category || "",
    Type: data?.Type || "",
    Image: data?.Image || null,
    Description: data?.Description || null,
    ScheduleDate: data?.ScheduleDate || "",
    Location: data?.Location || "",
    ContactPerson: data?.ContactPerson || "",
    ContactNumber: data?.ContactNumber || "",
    ContactEmail: data?.ContactEmail || "",
    TimeStart: data?.TimeStart || "",
    TimeEnd: data?.TimeEnd || "",
    RegistrationLink: data?.RegistrationLink || null,
    IsValidated: false,
    Remarks: data?.Remarks || null,
    CreatedBy: Number(data?.CreatedBy || (auth?.user ?? 0)),
    UpdatedBy: Number(data?.UpdatedBy || (auth?.user ?? 0)),
  };

  const handleSubmit = async (values: EventTable) => {
    try {
      if (Id) {
        update(Number(data?.Id), values);
        // PRIVATE, ON NOTIFY
        // GET THE USER ID ON THE CREATED LOGS
        const path = renderPath(user?.Role as Roles);
        const notify: NotificationTable = {
          UserId: data?.CreatedBy || 0,
          Email: user?.Email || null,
          Description: values?.Remarks || "No Remarks",
          Link: `${path}/event/d/${Id}`,
          IsRead: false,
        };
        add(notify);
        // PUBLIC, ON NOTIFY
        // GET THE REQUEST ACCESS EMAIL, LINK ON EVENT ID
      }
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    } finally {
      OnClose && OnClose();
    }
  };

  return (
    <>
      <S.Container className={cn("w-full mt-2", ClassName)}>
        <S.Content className="content">
          <S.Divider className="flex flex-row items-center justify-between">
            <AccessControl OtherCondition={Title !== null}>
              <S.Span className="text-lg font-medium">{Title}</S.Span>
            </AccessControl>
            <S.Divider></S.Divider>
          </S.Divider>
          <S.Divider>
            <Formik
              initialValues={InitialValues}
              onSubmit={handleSubmit}
              enableReinitialize={true}
              validateOnMount={true}
              validationSchema={eventValidator}
            >
              {({
                isValid,
                isSubmitting,
                handleChange,
                dirty,
                resetForm,
                handleBlur,
              }) =>
                !isLoading ? (
                  <Form>
                    <S.Divider className="w-full mb-2">
                      <S.Label className="text-[#666666] font-medium ml-3">
                        Remarks
                      </S.Label>
                      <textarea
                        placeholder="Remarks"
                        name="Remarks"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full resize-none p-3 border border-[#C4C4C4] rounded-md"
                        aria-setsize={10}
                      />
                    </S.Divider>

                    <S.Divider className="w-full flex justify-end items-center gap-4 ">
                      <CustomButton
                        leftIcon={<Icon.Cancel className="text-primary" />}
                        text="Cancel"
                        onClick={() => {
                          resetForm();
                          OnClose && OnClose();
                        }}
                        color={ButtonColor.default}
                        type={ButtonType.button}
                      />
                      <CustomButton
                        leftIcon={
                          <SaveIcon className="text-primary md:text-white" />
                        }
                        disabled={!dirty || !isValid || isSubmitting}
                        text="Save"
                        type={ButtonType.submit}
                      />
                    </S.Divider>
                  </Form>
                ) : (
                  <Skeleton />
                )
              }
            </Formik>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(DisapproveEventForm);
