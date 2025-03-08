import {
  ButtonColor,
  ButtonType,
  FormProps,
  ProfessionTable,
  RouteChannel,
  SFC,
  ToastType,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { CustomButton } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { memo } from "react";
import { useAuth } from "../../../../../hooks";
import { professionValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useParams } from "react-router-dom";
import { Skeleton } from "../../../../Feedback";

export const DisapproveProfessionForm: SFC<FormProps> = ({
  ClassName,
  Title,
  OnClose,
}) => {
  const { auth } = useAuth();
  const { Id: UserId } = useParams<{ Id: string }>();
  const Id = UserId ? parseInt(UserId) : parseInt(auth?.user ?? 0);
  console.log("ProfessionId", Id);
  const { update } = API.Setup.Profession.Update(
    false,
    RouteChannel.INDEX,
    false,
  );
  const { data, isLoading } = API.Setup.Profession.Get(Id);

  const InitialValues: ProfessionTable = {
    UserId: data?.UserId || 0,
    Title: data?.Title || "",
    LicenseNumber: data?.LicenseNumber || "",
    YearsExp: data?.YearsExp || 0,
    Description: data?.Description || "",
    IsVerified: false,
    Remarks: null,
  };

  const handleSubmit = async (values: ProfessionTable) => {
    try {
      if (Id) update(Number(data?.Id), values);
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
              validationSchema={professionValidator}
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
export default memo(DisapproveProfessionForm);
