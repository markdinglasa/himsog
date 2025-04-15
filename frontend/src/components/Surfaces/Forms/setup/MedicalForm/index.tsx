import { Form, Formik } from "formik";
import {
  AccessControl,
  AutoComplete,
  CircleButton,
  CustomButton,
  CustomInput,
  Skeleton,
} from "../../../../../components";
import {
  ButtonColor,
  ButtonType,
  MedicalTable,
  InputType,
  RouteChannel,
  SetupForm,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo, useState } from "react";
import { Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { cn, displayToast } from "../../../../../utils";
import { medicalValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import { useNavigate } from "react-router-dom";
import Icon from "../../../../../constants/icon";

const MedicalForm: SFC<SetupForm> = ({
  ClassName,
  IsSetup = false,
  IsDetails = false,
  Title,
}) => {
  const [IsEdit, SetIsEdit] = useState<boolean>(IsDetails);
  const { auth } = useAuth();
  const Id: number = parseInt(auth?.user ?? 0);
  const { add } = API.Setup.Medical.Add();
  const { update } = API.Setup.Medical.Update();
  const { data, isLoading } = API.Setup.Medical.Get(Id);

  // console.log("data:", data);
  const navigate = useNavigate();
  const InitialValues: MedicalTable = {
    UserId: data?.UserId || (auth?.user ?? 0),
    DiagnosedCondition: data?.DiagnosedCondition || null,
    Medication: data?.Medication || null,
    FamilyMedicalHistory: data?.FamilyMedicalHistory || null,
    SurgicalHistory: data?.SurgicalHistory || null,
    NoSleep: data?.NoSleep || 0,
    StressLevel: data?.StressLevel || "",
    Smoke: data?.Smoke || "",
    Alchohol: data?.Alchohol || "",
    Pregant: data?.Pregant || "",
    BowelMovement: data?.BowelMovement || "",
    LabResult: data?.LabResult || null,
    BloodSugar: data?.BloodSugar || 0,
    Cholesterol: data?.Cholesterol || 0,
    Creatinine: data?.Creatinine || 0,
    MentalHealth: data?.MentalHealth || null,
    IsConsulted: data?.IsConsulted || false,
  };
  const handleSubmit = async (values: MedicalTable): Promise<void> => {
    try {
      if (data?.Id) update(Number(data.Id), values);
      else add(values);
    } catch (error: any) {
      displayToast(error.message || Error.m00001, ToastType.error);
    }
  };

  return (
    <S.Container className={cn("", ClassName)}>
      <S.Content className="flex justify-center flex-col items-center w-full ">
        <S.FormHeader className="flex flex-row items-center justify-between">
          <S.Span className="text-lg font-medium">{Title}</S.Span>
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
        <S.Divider className="w-full text-left mb-3">
          <S.Span className="text-sm text-slate-600">
            Some info may be visible to other people using Himsog services.
            <S.Span className="text-blue-600"> Learn more.</S.Span>
          </S.Span>
        </S.Divider>
        <S.Divider className="flex  w-full  justify-center items-center ">
          <S.Divider className=" w-full">
            <S.Divider className="w-full">
              <S.Divider className="">
                <Formik
                  initialValues={InitialValues}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                  validateOnMount={true}
                  validationSchema={medicalValidator}
                >
                  {({
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    values,
                    setTouched,
                    isValid,
                    resetForm,
                  }) =>
                    !isLoading ? (
                      <Form>
                        <AccessControl OtherCondition={!IsSetup && !IsEdit}>
                          <S.Divider className="w-full flex justify-end items-center gap-3">
                            <CustomButton
                              leftIcon={
                                <Icon.Cancel className="text-primary" />
                              }
                              text="Cancel"
                              ClassName=""
                              color={ButtonColor.default}
                              onClick={() => {
                                SetIsEdit(true);
                                resetForm();
                              }}
                              type={ButtonType.button}
                              morph={false}
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

export default memo(MedicalForm);
