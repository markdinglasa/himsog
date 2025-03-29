import { Form, Formik } from "formik";
import { CustomButton, CustomInput } from "../../../../../components";
import {
  ButtonType,
  FormProps,
  InputType,
  RequestAccessTable,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo } from "react";
import { Error } from "../../../../../shared";
import * as S from "../../../../../styles";
import { displayToast } from "../../../../../utils";
import { requestAccessValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
//import { useParams } from "react-router-dom";

const RequestAccessForm: SFC<FormProps> = ({
  ClassName,
  OnClose,
  RecordId,
}) => {
  // const { Id } = useParams<{ Id: string }>();
  const { add } = API.Public.RequestAccess.Add();
  // console.log("RecordId", RecordId);
  //const { update } = API.Setup.RequestAccess.Update();
  const InitialValues: RequestAccessTable = {
    Email: "",
    IsApproved: false,
    Token: "",
    Remarks: null,
    EventId: RecordId === "Event" ? 1 : null,
    ArticleId: RecordId === "Article" ? 1 : null,
  };

  const handleSubmit = async (values: RequestAccessTable): Promise<void> => {
    try {
      // console.log("Values:", values);
      add(values);
      OnClose && OnClose();
    } catch (error: any) {
      displayToast(error.message || Error.m00001, ToastType.error);
    }
  };

  return (
    <S.Container className={ClassName}>
      <S.Content className="flex justify-center items-center w-full ">
        <S.Divider className="flex  w-full  justify-center items-center ">
          <S.Divider className=" w-full">
            <S.Divider className="w-full">
              <S.Divider className="">
                <Formik
                  initialValues={InitialValues}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                  validateOnMount={true}
                  validationSchema={requestAccessValidator}
                >
                  {({
                    errors,
                    touched,
                    isSubmitting,
                    handleBlur,
                    handleChange,
                    isValid,
                    dirty,
                  }) => (
                    <Form>
                      <CustomInput
                        ClassName="w-full "
                        errors={errors}
                        type={InputType.email}
                        label="Email"
                        placeholder="example@doh.gov.ph"
                        name="Email"
                        touched={touched}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <S.Divider className="h-full flex items-center justify-end">
                        <CustomButton
                          text="send"
                          disabled={!dirty || !isValid || isSubmitting}
                          type={ButtonType.submit}
                          morph={false}
                        />
                      </S.Divider>
                    </Form>
                  )}
                </Formik>
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Divider>
      </S.Content>
    </S.Container>
  );
};

export default memo(RequestAccessForm);
