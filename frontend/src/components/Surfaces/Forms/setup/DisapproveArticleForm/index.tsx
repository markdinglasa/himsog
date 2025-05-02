import {
  ButtonColor,
  ButtonType,
  ArticleTable,
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
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useParams } from "react-router-dom";
import { Skeleton } from "../../../../Feedback";
import { useAuth } from "../../../../../hooks";

export const DisapproveArticleForm: SFC<FormProps> = ({
  ClassName,
  Title,
  OnClose,
}) => {
  const { Id } = useParams<{ Id: string }>();
  const { update } = API.Setup.Article.Update();
  const { data, isLoading } = API.Setup.Article.Get(Number(Id));
  const { add } = API.Utility.Notification.Add();
  const { data: user } = API.Setup.User.Get(Number(data?.CreatedBy));
  const { auth } = useAuth();

  const InitialValues: ArticleTable = {
    CreatedBy: Number(data?.CreatedBy || (auth?.user ?? 0)),
    UpdatedBy: Number(data?.UpdatedBy || (auth?.user ?? 0)),
    Title: data?.Title || "",
    Description: data?.Description || null,
    DatePosted: data?.DatePosted || "",
    PostedBy: data?.PostedBy || "",
    IsValidated: false,
    Image: data?.Image || null,
    Link: data?.Link || null,
    Remarks: data?.Remarks || null,
  };

  const handleSubmit = async (values: ArticleTable) => {
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
          Link: `${path}/health-article/d/${Id}`,
          IsRead: false,
        };
        add(notify);
        // PUBLIC, ON NOTIFY
        // GET THE REQUEST ACCESS EMAIL, LINK ON Article ID
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
              //validationSchema={articleValidator}
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
export default memo(DisapproveArticleForm);
