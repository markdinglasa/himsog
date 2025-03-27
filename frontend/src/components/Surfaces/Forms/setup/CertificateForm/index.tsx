import { Form, Formik } from "formik";
import {
  AccessControl,
  AutoComplete,
  CustomButton,
  CustomInput,
  Skeleton,
} from "../../../../../components";
import {
  ButtonColor,
  ButtonType,
  InputType,
  CertificateTable,
  SFC,
  ToastType,
  FormProps,
} from "../../../../../types";
import { memo } from "react";
import { Error } from "../../../../../shared";
import * as S from "../../../../../styles";
import { displayToast, formatDateForInput } from "../../../../../utils";
import { certificateValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";
import { useAuth } from "../../../../../hooks";

const CertificateForm: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  RecordId,
  OnClose,
}) => {
  const { auth } = useAuth();
  const { add } = API.Setup.Certificate.Add();
  const { update } = API.Setup.Certificate.Update();
  const { data, isLoading } = API.Setup.Certificate.Get(Number(RecordId));
  const { data: profession } = API.Setup.Profession.Get(
    Number(auth?.user ?? 0),
  );
  const InitialValues: CertificateTable = {
    ProfessionId: data?.ProfessionId || (profession?.Id ?? 0),
    Name: "Certificate Name",
    IssuedTo: data?.IssuedTo || "",
    Issuer: data?.Issuer || "",
    ExpiryDate: data?.ExpiryDate || "",
    CertificateType: data?.CertificateType || "",
    CertificateNumber: data?.CertificateNumber || "",
    AttachmentURL: data?.AttachmentURL || null,
  };
  const handleSubmit = async (values: CertificateTable): Promise<void> => {
    try {
      values.ExpiryDate =
        values?.ExpiryDate && formatDateForInput(new Date(values?.ExpiryDate));
      if (Number(RecordId) !== 0) update(Number(RecordId), values);
      else add(values);
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
                  validationSchema={certificateValidator}
                >
                  {({
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    values,
                    resetForm,
                    setFieldValue,
                    setTouched,
                    isValid,
                  }) =>
                    !isLoading ? (
                      <Form>
                        <S.Divider className="w-full flex md:flex-row flex-col gap-2">
                          <S.Divider className="w-full py-1">
                            <CustomInput
                              errors={errors}
                              type={InputType.text}
                              label="Issued to"
                              value={values?.IssuedTo.toString()}
                              placeholder="e.g. Juan Dela Cruz"
                              name="IssuedTo"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                          <S.Divider className="w-full py-1">
                            <CustomInput
                              errors={errors}
                              type={InputType.text}
                              label="Issuer"
                              value={values?.Issuer.toString()}
                              placeholder="e.g. Department of Health"
                              name="Issuer"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.date}
                            label="Expiry Date"
                            value={
                              String(values.ExpiryDate?.toString() ?? "").split(
                                "T",
                              )[0]
                            }
                            name="ExpiryDate"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full pb-1">
                          <AutoComplete
                            Label="Certificate Type"
                            Values={values.CertificateType}
                            Options={[
                              {
                                Id: "Certificate of Completion",
                                label: "Certificate of Completion",
                              },
                              {
                                Id: "Certificate of Participation",
                                label: "Certificate of Participation",
                              },
                              {
                                Id: "Certificate of Achievement",
                                label: "Certificate of Achievement",
                              },
                              {
                                Id: "Professional Certificate",
                                label: "Professional Certificate",
                              },
                              {
                                Id: "Diploma Certificate",
                                label: "Diploma Certificate",
                              },
                              {
                                Id: "Certificate of Excellence",
                                label: "Certificate of Excellence",
                              },
                              {
                                Id: "Certificate of Attendance",
                                label: "Certificate of Attendance",
                              },
                              {
                                Id: "Safety Certificate",
                                label: "Safety Certificate",
                              },
                              {
                                Id: "Food Safety Certificate",
                                label: "Food Safety Certificate",
                              },
                              {
                                Id: "Quality Assurance Certificate",
                                label: "Quality Assurance Certificate",
                              },
                              {
                                Id: "Training Certificate",
                                label: "Training Certificate",
                              },
                            ]}
                            Name="CertificateType"
                            OptionName="label"
                            Placeholder="Certificate Type"
                            OnChange={(_: any, value: any) => {
                              setFieldValue("CertificateType", value?.Id || "");
                              setFieldValue("Name", value?.Id || "");
                              setTouched({ CertificateType: true });
                            }}
                            OnBlur={handleBlur}
                            Errors={errors}
                            Touched={touched}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            label="Certificate Number"
                            value={values?.CertificateNumber.toString()}
                            placeholder="Certificate Number"
                            name="CertificateNumber"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            label="Attachment URL (Optional)"
                            value={values?.AttachmentURL ?? ""}
                            placeholder="AttachmentURL"
                            name="AttachmentURL"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <AccessControl OtherCondition={!IsDetails}>
                          <S.Divider className="w-full flex justify-end gap-2 items-center">
                            <CustomButton
                              leftIcon={
                                <Icon.Cancel className="text-primary" />
                              }
                              text="Cancel"
                              ClassName=""
                              type={ButtonType.button}
                              color={ButtonColor.default}
                              morph={false}
                              onClick={() => {
                                OnClose && OnClose();
                                resetForm();
                              }}
                            />
                            <CustomButton
                              leftIcon={<Icon.Save />}
                              text="Save"
                              ClassName=""
                              disabled={!isValid || isSubmitting}
                              type={ButtonType.submit}
                              morph={false}
                            />
                          </S.Divider>
                        </AccessControl>
                      </Form>
                    ) : (
                      <Skeleton />
                    )
                  }
                </Formik>
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Divider>
      </S.Content>
    </S.Container>
  );
};

export default memo(CertificateForm);
