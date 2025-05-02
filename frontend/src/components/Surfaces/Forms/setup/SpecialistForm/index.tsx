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
  ProfessionSpecialistTable,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo, useState } from "react";
import { Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { displayToast } from "../../../../../utils";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";
import { professionSpecialistValidator } from "../../../../../validators";

const SpecialistForm: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  RecordId,
  OnClose,
  Title,
}) => {
  const [IsEdit, SetIsEdit] = useState<boolean>(IsDetails);
  const { auth } = useAuth();
  const { add } = API.Setup.ProfessionSpecialist.Add();
  const { update } = API.Setup.ProfessionSpecialist.Update();
  const { data, isLoading } = API.Setup.ProfessionSpecialist.Get(
    Number(RecordId),
  );

  const InitialValues: ProfessionSpecialistTable = {
    UserId: data?.UserId || (auth?.user ?? 0),
    Title: data?.Title || "",
    Description: data?.Description || null,
    Experience: data?.Experience || 0,
  };

  const handleSubmit = async (
    values: ProfessionSpecialistTable,
  ): Promise<void> => {
    try {
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
                  validationSchema={professionSpecialistValidator}
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
                            label="Specialization"
                            disabled={IsEdit}
                            value={values?.Title}
                            placeholder="e.g. Clinical Nutrition"
                            name="Title"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <textarea
                            className="w-full h-[10rem] p-3 bg-inherit border border-[#C4C4C4] hover:border-[#202020] resize-none"
                            placeholder="e.g. Medical nutrition therapy for various health conditions."
                            name="Description"
                            value={values?.Description ?? ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.number}
                            disabled={IsEdit}
                            label="Year of Experience"
                            value={values?.Experience.toString()}
                            placeholder="e.g. 2 years"
                            name="Experience"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
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

export default memo(SpecialistForm);
