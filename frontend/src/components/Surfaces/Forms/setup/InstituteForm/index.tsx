import { Form, Formik } from "formik";
import {
  AccessControl,
  CircleButton,
  CustomButton,
  CustomInput,
  Skeleton,
} from "../../../../../components";
import {
  ButtonColor,
  ButtonType,
  FormProps,
  InputType,
  ProfessionInstituteTable,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo, useState } from "react";
import { Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import {
  displayToast,
  formatDateForInput,
  IsBoolean,
} from "../../../../../utils";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";
import { professionInstituteValidator } from "../../../../../validators/setup/professionInstitute";
import { Checkbox, FormControlLabel } from "@mui/material";

const InstituteForm: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  RecordId,
  OnClose,
  Title,
}) => {
  const [IsEdit, SetIsEdit] = useState<boolean>(IsDetails);
  const { auth } = useAuth();
  const { add } = API.Setup.ProfessionInstitute.Add();
  const { update } = API.Setup.ProfessionInstitute.Update();
  const { data, isLoading } = API.Setup.ProfessionInstitute.Get(
    Number(RecordId),
  );

  const InitialValues: ProfessionInstituteTable = {
    UserId: data?.UserId || (auth?.user ?? 0),
    Name: data?.Name || "",
    Position: data?.Position || "",
    Address: data?.Address || "",
    DateStarted: data?.DateStarted || "",
    DateEnded: data?.DateEnded || "",
    IsCurrentWork: IsBoolean(data?.IsCurrentWork) || false,
  };
  // console.log("InitialValues:", InitialValues);
  const handleSubmit = async (
    values: ProfessionInstituteTable,
  ): Promise<void> => {
    try {
      values.DateStarted =
        values?.DateStarted &&
        formatDateForInput(new Date(values?.DateStarted));
      values.DateEnded =
        values?.DateEnded && formatDateForInput(new Date(values?.DateEnded));
      if (data?.Id) update(Number(data.Id), values);
      else add(values);
      OnClose && OnClose();
    } catch (error: any) {
      displayToast(error.message || Error.m00001, ToastType.error);
    }
  };

  return (
    <S.Container className={ClassName}>
      <S.Content className="flex justify-center items-center w-full flex-col ">
        <AccessControl OtherCondition={IsEdit && IsDetails}>
          <S.FormHeader className="flex flex-row items-center justify-between mb-3">
            <S.Divider className="flex flex-col items-start">
              <S.Span className="text-lg font-medium">{Title}</S.Span>
            </S.Divider>
            <S.Divider>
              <AccessControl OtherCondition={IsEdit && IsDetails}>
                <CircleButton
                  OnClick={() => SetIsEdit(false)}
                  Icon={<Icon.Edit className="text-primary" />}
                  Type={ButtonType.button}
                />
              </AccessControl>
            </S.Divider>
          </S.FormHeader>
        </AccessControl>
        <S.Divider className="flex  w-full  justify-center items-center ">
          <S.Divider className=" w-full">
            <S.Divider className="w-full">
              <S.Divider className="">
                <Formik
                  initialValues={InitialValues}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                  validateOnMount={true}
                  validationSchema={professionInstituteValidator}
                >
                  {({
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    values,
                    resetForm,
                    isValid,
                  }) =>
                    !isLoading ? (
                      <Form>
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-2"></S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            label="Institute's Name"
                            disabled={IsEdit}
                            value={values?.Name}
                            placeholder="e.g. Metro Manila Medical Center"
                            name="Name"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            disabled={IsEdit}
                            label="Position"
                            value={values?.Position}
                            placeholder="e.g. Clinical Nutritionist"
                            name="Position"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            disabled={IsEdit}
                            label="Address"
                            value={values?.Address}
                            placeholder="e.g. Makati City, Philippines"
                            name="Address"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full flex md:flex-row flex-col gap-[1rem]">
                          <S.Divider className="w-full py-1">
                            <CustomInput
                              errors={errors}
                              type={InputType.date}
                              label="Started On"
                              disabled={IsEdit}
                              value={
                                String(
                                  values.DateStarted?.toString() ?? "",
                                ).split("T")[0]
                              }
                              name="DateStarted"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                          <S.Divider className="w-full py-1">
                            <CustomInput
                              errors={errors}
                              type={InputType.date}
                              label="Ended On"
                              disabled={IsEdit}
                              value={
                                String(
                                  values.DateEnded?.toString() ?? "",
                                ).split("T")[0]
                              }
                              name="DateEnded"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                        </S.Divider>
                        <S.Divider className="w-full">
                          <FormControlLabel
                            className="text-[sm] text-slate-700"
                            control={
                              <Checkbox
                                size="small"
                                color="success"
                                checked={values.IsCurrentWork}
                                onChange={handleChange}
                                name="IsCurrentWork"
                              />
                            }
                            label="I currently work here"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontFamily: "Montserrat",
                                fontSize: "14px",
                                color: "#3f3f3f",
                                alignItems: "center",
                                display: "flex",
                              },
                            }}
                          />
                        </S.Divider>
                        <AccessControl OtherCondition={!IsEdit}>
                          <S.Divider className="w-full flex justify-end gap-3 items-center">
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

export default memo(InstituteForm);
