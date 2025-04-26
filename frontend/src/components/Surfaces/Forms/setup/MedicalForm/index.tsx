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
  SFC,
  ToastType,
  FormProps,
} from "../../../../../types";
import { memo, useRef, useState } from "react";
import { Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { cn, displayToast } from "../../../../../utils";
import { medicalValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useParams } from "react-router-dom";

const MedicalForm: SFC<FormProps> = ({
  ClassName,
  Title,
  IsDisplay = false,
}) => {
  const { auth } = useAuth();
  const { Id: ParamId } = useParams<{ Id: string }>();
  const Id: number = IsDisplay ? Number(ParamId) : parseInt(auth?.user ?? 0);
  const { add } = API.Setup.Medical.Add();
  const { update } = API.Setup.Medical.Update();
  const { data, isLoading } = API.Setup.Medical.Get(Id);
  const Disabled: boolean = IsDisplay
    ? false
    : Number(data?.Id?.toString() ?? "0") > 0;

  const [IsEdit, SetIsEdit] = useState<boolean>(!Disabled);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { upload } = API.Utility.UploadImage();

  const InitialValues: MedicalTable = {
    UserId: data?.UserId || (auth?.user ?? 0),
    DiagnosedCondition: data?.DiagnosedCondition || {
      IsDiabetesType1:
        Boolean(data?.DiagnosedCondition?.IsDiabetesType1) || false,
      IsCardiovasularDisease:
        Boolean(data?.DiagnosedCondition?.IsCardiovasularDisease) || false,
      IsHyperlipidemia:
        Boolean(data?.DiagnosedCondition?.IsHyperlipidemia) || false,
      IsGERD: Boolean(data?.DiagnosedCondition?.IsGERD) || false,
      IsDiabetesType2:
        Boolean(data?.DiagnosedCondition?.IsDiabetesType2) || false,
      IsChronicKidneyDisease:
        Boolean(data?.DiagnosedCondition?.IsChronicKidneyDisease) || false,
      IsThyroidDisorders:
        Boolean(data?.DiagnosedCondition?.IsThyroidDisorders) || false,
      IsGastrointestinalDisorder:
        Boolean(data?.DiagnosedCondition?.IsGastrointestinalDisorder) || false,
      IsHypertension:
        Boolean(data?.DiagnosedCondition?.IsHypertension) || false,
      IsLiverDisorder:
        Boolean(data?.DiagnosedCondition?.IsLiverDisorder) || false,
      IsPCOS: Boolean(data?.DiagnosedCondition?.IsPCOS) || false,
      IsOther: Boolean(data?.DiagnosedCondition?.IsOther) || false,
      OtherCondition: data?.DiagnosedCondition?.OtherCondition || "",
    },
    Medication: data?.Medication || null,
    FamilyMedicalHistory: data?.FamilyMedicalHistory || {
      IsDiabetes: Boolean(data?.FamilyMedicalHistory?.IsDiabetes) || false,
      IsCancer: Boolean(data?.FamilyMedicalHistory?.IsCancer) || false,
      IsObesity: Boolean(data?.FamilyMedicalHistory?.IsObesity) || false,
      IsKidneyDisease:
        Boolean(data?.FamilyMedicalHistory?.IsKidneyDisease) || false,
      IsHeartDisease:
        Boolean(data?.FamilyMedicalHistory?.IsHeartDisease) || false,
      IsOther: Boolean(data?.FamilyMedicalHistory?.IsOther) || false,
      OtherCondition: data?.FamilyMedicalHistory?.OtherCondition || null,
    },
    SurgicalHistory: data?.SurgicalHistory || null,
    NoSleep: data?.NoSleep || 0,
    StressLevel: data?.StressLevel || "",
    Smoke: data?.Smoke || "",
    Alcohol: data?.Alcohol || "",
    Pregnant: data?.Pregnant || "",
    BowelMovement: data?.BowelMovement || "",
    LabResult: data?.LabResult || null,
    BloodSugar: data?.BloodSugar || 0,
    Cholesterol: data?.Cholesterol || 0,
    Creatinine: data?.Creatinine || 0,
    MentalHealth: data?.MentalHealth || null,
    IsConsulted: Boolean(data?.IsConsulted) || false,
  };

  const handleSubmit = async (values: MedicalTable): Promise<void> => {
    try {
      const formData = new FormData();
      let imagePath;
      if (imageFile) {
        formData.append("image", imageFile);
        imagePath = await upload(formData);
      }
      values.LabResult = data?.LabResult ? data?.LabResult : imagePath || null;
      console.log(values);
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
            <AccessControl OtherCondition={IsEdit && !IsDisplay}>
              <CircleButton
                OnClick={() => SetIsEdit(false)}
                Icon={<Icon.Edit className="text-primary" />}
                Type={ButtonType.button}
              />
            </AccessControl>
          </S.Divider>
        </S.FormHeader>
        <AccessControl OtherCondition={!IsDisplay}>
          <S.Divider className="w-full text-left mb-3">
            <S.Span className="text-sm text-slate-600">
              Some info may be visible to other people using Himsog services.
              <S.Span className="text-blue-600"> Learn more.</S.Span>
            </S.Span>
          </S.Divider>
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
                        <S.Divider className="">
                          <S.Divider className="flex flex-col">
                            <S.Span className="text-sm font-medium">
                              Diagnosed Medical Conditions
                            </S.Span>
                            <S.Label className="text-sm text-slate-600">
                              Select any diagnosed medical conditions you may
                              have.
                            </S.Label>
                          </S.Divider>
                          <S.Divider className="flex flex-row gap-1 items-center mb-2 justify-between">
                            <FormGroup>
                              <FormControlLabel
                                name="IsDiabetesType1"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.DiagnosedCondition?.IsDiabetesType1
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "DiagnosedCondition.IsDiabetesType1",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Diabetes (Type I)"
                              />

                              <FormControlLabel
                                name="IsCardiovasularDisease"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.DiagnosedCondition
                                        ?.IsCardiovasularDisease
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "DiagnosedCondition.IsCardiovasularDisease",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Cardiovasular Disease"
                              />
                              <FormControlLabel
                                name="IsHyperlipidemia"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.DiagnosedCondition
                                        ?.IsHyperlipidemia
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "DiagnosedCondition.IsHyperlipidemia",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Hyperlipidemia (High Cholesterol)"
                              />
                              <FormControlLabel
                                name="IsGERD"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={values.DiagnosedCondition?.IsGERD}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "DiagnosedCondition.IsGERD",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="GERD / Acid Reflux"
                              />
                            </FormGroup>
                            <FormGroup>
                              <FormControlLabel
                                name="IsDiabetesType2"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.DiagnosedCondition?.IsDiabetesType2
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "DiagnosedCondition.IsDiabetesType2",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Diabetes (Type II)"
                              />
                              <FormControlLabel
                                name="IsChronicKidneyDisease"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.DiagnosedCondition
                                        ?.IsChronicKidneyDisease
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "DiagnosedCondition.IsChronicKidneyDisease",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Chronic Kidney Disease"
                              />
                              <FormControlLabel
                                name="IsThyroidDisorders"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.DiagnosedCondition
                                        ?.IsThyroidDisorders
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "DiagnosedCondition.IsThyroidDisorders",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Thyroid Disorders"
                              />
                              <FormControlLabel
                                name="IsGastrointestinalDisorder"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.DiagnosedCondition
                                        ?.IsGastrointestinalDisorder
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "DiagnosedCondition.IsGastrointestinalDisorder",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Gastrointestinal Disorder (UBS, Celiac, etc.)"
                              />
                            </FormGroup>
                            <FormGroup>
                              <FormControlLabel
                                name="IsHypertension"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.DiagnosedCondition?.IsHypertension
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "DiagnosedCondition.IsHypertension",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Hypertension"
                              />
                              <FormControlLabel
                                name="IsLiverDisorder"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.DiagnosedCondition
                                        ?.IsLiverDisorder ?? false
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "DiagnosedCondition.IsLiverDisorder",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Liver Disorder"
                              />
                              <FormControlLabel
                                name="IsPCOS"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={values.DiagnosedCondition?.IsPCOS}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "DiagnosedCondition.IsPCOS",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="PCOS"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.DiagnosedCondition?.IsOther ??
                                      false
                                    }
                                    onChange={(e) => {
                                      setFieldValue(
                                        "DiagnosedCondition.IsOther",
                                        e.target.checked,
                                      );
                                      if (!values.DiagnosedCondition?.IsOther)
                                        setFieldValue(
                                          "DiagnosedCondition.OtherCondition",
                                          null,
                                        );
                                    }}
                                  />
                                }
                                label="Other"
                              />
                            </FormGroup>
                          </S.Divider>
                          <AccessControl
                            OtherCondition={
                              values.DiagnosedCondition?.IsOther ?? false
                            }
                          >
                            <S.Divider>
                              <CustomInput
                                disabled={IsEdit}
                                errors={errors}
                                type={InputType.text}
                                label="Please specify other medical condtion"
                                value={
                                  values?.DiagnosedCondition?.OtherCondition ??
                                  ""
                                }
                                onChange={(e) =>
                                  setFieldValue(
                                    "DiagnosedCondition.OtherCondition",
                                    e.target.value,
                                  )
                                }
                                placeholder="Please specify other medical condtion"
                                name="OtherCondition"
                                touched={touched}
                                onBlur={handleBlur}
                              />
                            </S.Divider>
                          </AccessControl>
                        </S.Divider>
                        <S.Divider className="w-full mb-2">
                          <S.Divider className="flex flex-col">
                            <S.Span className="text-md font-medium">
                              Medications or Supplements
                            </S.Span>
                            <S.Label className="text-[#666666] font-medium">
                              List current medications or supplements (name and
                              dosage)
                            </S.Label>
                          </S.Divider>
                          <textarea
                            placeholder="e.g. Metformin 500mg (2x/day), Vitamin D3 1000 IU"
                            name="Medication"
                            disabled={IsEdit}
                            value={values?.Medication ?? ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full resize-none p-3 border border-[#C4C4C4] rounded-md"
                            aria-setsize={10}
                          />
                        </S.Divider>
                        <S.Divider className="flex flex-col">
                          <S.Divider className="flex flex-col">
                            <S.Span className="text-md font-medium">
                              Family Medical History
                            </S.Span>
                            <S.Label className="text-sm text-slate-600">
                              Select any family medical conditions you may have.
                            </S.Label>
                          </S.Divider>
                          <S.Divider className="flex flex-row items-center justify-between mb-2">
                            <FormGroup>
                              <FormControlLabel
                                name="IsDiabetes"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.FamilyMedicalHistory?.IsDiabetes
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "FamilyMedicalHistory.IsDiabetes",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Diabetes"
                              />
                              <FormControlLabel
                                name="IsCancer"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.FamilyMedicalHistory?.IsCancer
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "FamilyMedicalHistory.IsCancer",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Cancer"
                              />
                            </FormGroup>
                            <FormGroup>
                              <FormControlLabel
                                name="IsObesity"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.FamilyMedicalHistory?.IsObesity
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "FamilyMedicalHistory.IsObesity",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Obesity"
                              />
                              <FormControlLabel
                                name="IsKidneyDisease"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.FamilyMedicalHistory
                                        ?.IsKidneyDisease
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "FamilyMedicalHistory.IsKidneyDisease",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Kidney Disease"
                              />
                            </FormGroup>
                            <FormGroup>
                              <FormControlLabel
                                name="IsHeartDisease"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.FamilyMedicalHistory
                                        ?.IsHeartDisease
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "FamilyMedicalHistory.IsHeartDisease",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Obesity"
                              />
                              <FormControlLabel
                                name="IsOther"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={
                                      values.FamilyMedicalHistory?.IsOther
                                    }
                                    onChange={(e) =>
                                      setFieldValue(
                                        "FamilyMedicalHistory.IsOther",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label="Other"
                              />
                            </FormGroup>
                          </S.Divider>
                          <AccessControl
                            OtherCondition={
                              values.FamilyMedicalHistory?.IsOther ?? false
                            }
                          >
                            <S.Divider>
                              <CustomInput
                                disabled={IsEdit}
                                errors={errors}
                                type={InputType.text}
                                label="Please specify other medical condtion"
                                value={
                                  values?.FamilyMedicalHistory
                                    ?.OtherCondition ?? ""
                                }
                                onChange={(e) =>
                                  setFieldValue(
                                    "FamilyMedicalHistory.OtherCondition",
                                    e.target.value,
                                  )
                                }
                                placeholder="Please specify other medical condtion"
                                name="OtherCondition"
                                touched={touched}
                                onBlur={handleBlur}
                              />
                            </S.Divider>
                          </AccessControl>
                        </S.Divider>
                        <S.Divider className="w-full mb-2">
                          <S.Divider className="flex flex-col">
                            <S.Span className="text-md font-medium">
                              Surgical History
                            </S.Span>
                            <S.Label className="text-[#666666] font-medium">
                              Have you had any surgery/ies affecting digestion
                              or weight ?
                            </S.Label>
                          </S.Divider>
                          <textarea
                            placeholder="e.g. Metformin 500mg (2x/day), Vitamin D3 1000 IU"
                            name="SurgicalHistory"
                            disabled={IsEdit}
                            value={values?.SurgicalHistory ?? ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full resize-none p-3 border border-[#C4C4C4] rounded-md"
                            aria-setsize={10}
                          />
                        </S.Divider>
                        <S.Divider className="py-3      ">
                          <S.Span className="text-md font-medium">
                            Lifestyle
                          </S.Span>
                        </S.Divider>
                        <S.Divider>
                          <CustomInput
                            isRequired={true}
                            disabled={IsEdit}
                            errors={errors}
                            type={InputType.number}
                            label="Average hours of sleep per night"
                            value={values?.NoSleep.toString()}
                            placeholder="e.g. 8"
                            name="NoSleep"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider>
                          <FormControl>
                            <S.Label className="text-[#666666] font-medium ml-3">
                              Stress level{" "}
                              <span className="text-red-500">*</span>
                            </S.Label>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              value={values.StressLevel}
                              name="StressLevel"
                              onChange={(e) =>
                                setFieldValue("StressLevel", e.target.value)
                              }
                            >
                              <FormControlLabel
                                value="Low"
                                control={
                                  <Radio color="success" disabled={IsEdit} />
                                }
                                label="Low"
                              />
                              <FormControlLabel
                                value="Moderate"
                                control={
                                  <Radio color="success" disabled={IsEdit} />
                                }
                                label="Moderate"
                              />
                              <FormControlLabel
                                value="High"
                                control={
                                  <Radio color="success" disabled={IsEdit} />
                                }
                                label="High"
                              />
                            </RadioGroup>
                          </FormControl>
                        </S.Divider>
                        <S.Divider className="py-3">
                          <S.Span className="text-md font-medium">
                            Substance Use
                          </S.Span>
                        </S.Divider>
                        <S.Divider className="w-full pb-1">
                          <AutoComplete
                            IsEdit={IsEdit}
                            IsRequired={true}
                            Label="Do you smoke? "
                            Values={values.Smoke}
                            Options={[
                              { Id: "No", Label: "No" },
                              {
                                Id: "Occasionally",
                                Label: "Occasionally",
                              },
                              { Id: "Daily", Label: "Daily" },
                            ]}
                            Name="Smoke"
                            OptionName="Label"
                            Placeholder="Do you Smoke?"
                            OnChange={(_: any, value: any) => {
                              setFieldValue("Smoke", String(value?.Id) || "");
                              setTouched({ Smoke: true });
                            }}
                            OnBlur={handleBlur}
                            Errors={errors}
                            Touched={touched}
                          />
                        </S.Divider>
                        <S.Divider className="w-full pb-1">
                          <AutoComplete
                            IsEdit={IsEdit}
                            IsRequired={true}
                            Label="Do you drink alcohol?"
                            Values={values.Alcohol}
                            Options={[
                              { Id: "No", Label: "No" },
                              {
                                Id: "Occasionally",
                                Label: "Occasionally",
                              },
                              { Id: "Frequently", Label: "Daily" },
                            ]}
                            Name="Alcohol"
                            OptionName="Label"
                            Placeholder="Do you drink Alcohol?"
                            OnChange={(_: any, value: any) => {
                              setFieldValue("Alcohol", String(value?.Id) || "");
                              setTouched({ Alcohol: true });
                            }}
                            OnBlur={handleBlur}
                            Errors={errors}
                            Touched={touched}
                          />
                        </S.Divider>
                        <S.Divider className="py-3">
                          <S.Span className="text-md font-medium">
                            Pregnancy / Lactation
                          </S.Span>
                        </S.Divider>
                        <S.Divider>
                          <FormControl>
                            <S.Label className="text-[#666666] font-medium ml-3">
                              Preanancy / Lactation Status{" "}
                              <span className="text-red-500">*</span>
                            </S.Label>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              value={values.Pregnant}
                              name="Pregnant"
                              onChange={(e) =>
                                setFieldValue("Pregnant", e.target.value)
                              }
                            >
                              <FormControlLabel
                                value="Pregnant"
                                control={
                                  <Radio color="success" disabled={IsEdit} />
                                }
                                label="Pregnant"
                              />
                              <FormControlLabel
                                value="BreastFeeding"
                                control={
                                  <Radio color="success" disabled={IsEdit} />
                                }
                                label="Breast Feeding"
                              />
                              <FormControlLabel
                                value="NotApplicable"
                                control={
                                  <Radio color="success" disabled={IsEdit} />
                                }
                                label="Not Applicable"
                              />
                            </RadioGroup>
                          </FormControl>
                        </S.Divider>
                        <S.Divider className="py-3">
                          <S.Span className="text-md font-medium">
                            Bowel Movements
                          </S.Span>
                        </S.Divider>
                        <S.Divider className="w-full pb-1">
                          <AutoComplete
                            IsEdit={IsEdit}
                            Label="How are your bowel movement? "
                            Values={values.BowelMovement}
                            Options={[
                              { Id: "Regular", Label: "Regular" },
                              {
                                Id: "Constipation",
                                Label: "Constipation",
                              },
                              { Id: "Diarrhea", Label: "Diarrhea" },
                              { Id: "Irregular", Label: "Irregular" },
                            ]}
                            Name="BowelMovement"
                            OptionName="Label"
                            Placeholder="How are your bowel movement?"
                            OnChange={(_: any, value: any) => {
                              setFieldValue("BowelMovement", value?.Id || "");
                              setTouched({ BowelMovement: true });
                            }}
                            OnBlur={handleBlur}
                            Errors={errors}
                            Touched={touched}
                          />
                        </S.Divider>
                        <S.Divider className="w-full">
                          <S.Divider className="flex flex-col">
                            <S.Span className="text-md font-medium">
                              Mental Health
                            </S.Span>
                            <S.Label className="text-[#666666] font-medium">
                              Any mental health diagnoese ? (Optional)
                            </S.Label>
                          </S.Divider>
                          <textarea
                            placeholder="e.g. Metformin 500mg (2x/day), Vitamin D3 1000 IU"
                            name="MentalHealth"
                            disabled={IsEdit}
                            value={values?.MentalHealth ?? ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full resize-none p-3 border border-[#C4C4C4] rounded-md"
                            aria-setsize={10}
                          />
                        </S.Divider>
                        <S.Divider className="py-3">
                          <S.Span className="text-md font-medium">
                            Lab Results
                          </S.Span>
                        </S.Divider>
                        <S.Divider className="flex md:flex-row flex-col items-center md:justify-between w-full gap-[1rem]">
                          <S.Divider className="w-full">
                            <CustomInput
                              isRequired={true}
                              disabled={IsEdit}
                              errors={errors}
                              type={InputType.number}
                              label="Blood Sugar (mg/dL)"
                              value={values?.BloodSugar.toString()}
                              placeholder="e.g. 100"
                              name="BloodSugar"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                          <S.Divider className="w-full">
                            <CustomInput
                              isRequired={true}
                              disabled={IsEdit}
                              errors={errors}
                              type={InputType.number}
                              label="Cholesterol (mg/dL)"
                              value={values?.Cholesterol.toString()}
                              placeholder="e.g. 100"
                              name="Cholesterol"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                          <S.Divider className="w-full">
                            <CustomInput
                              isRequired={true}
                              disabled={IsEdit}
                              errors={errors}
                              type={InputType.number}
                              label="Creatinine (mg/dL)"
                              value={values?.Creatinine.toString()}
                              placeholder="e.g. 100"
                              name="Creatinine"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                        </S.Divider>
                        <S.Divider>
                          <AccessControl
                            OtherCondition={
                              typeof data?.Image === "string" &&
                              data?.Image.length > 0 // should display if there is an image
                            }
                          >
                            <S.Divider className="w-[5rem] h-[5rem] mb-2">
                              <S.Image src={data?.Image ?? ""} />
                            </S.Divider>
                          </AccessControl>
                          <AccessControl OtherCondition={!IsEdit}>
                            <S.Divider className="w-full mb-[1rem]  relative">
                              <S.Divider className="w-full border-dashed border-2 border-[#C4C4C4] min-h-[10rem] rounded-md flex flex-col items-center justify-center">
                                <input
                                  id="upload-image"
                                  type="file"
                                  accept="image/*"
                                  name="Image"
                                  disabled={IsEdit}
                                  ref={fileInputRef}
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      setImageFile(file);
                                    }
                                  }}
                                  className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                                <S.Span>
                                  <FolderOpenIcon className="text-slate-600" />
                                </S.Span>
                                {!imageFile ? (
                                  <>
                                    <S.Span className="text-sm text-slate-600 text-center">
                                      Drag & drop your image or click the button
                                      to browse.
                                    </S.Span>
                                    <S.Span className="text-sm text-slate-600 mb-3">
                                      JPG, PNG (max 3MB)
                                    </S.Span>
                                  </>
                                ) : (
                                  <S.Divider className="py-5">
                                    <span>
                                      {imageFile?.name || "No file selected"}
                                    </span>
                                  </S.Divider>
                                )}
                                <CustomButton
                                  morph={false}
                                  text="Upload photo"
                                  disabled={IsEdit}
                                  onClick={() => fileInputRef.current?.click()}
                                  type={ButtonType.button}
                                  color={ButtonColor.default}
                                />
                              </S.Divider>
                            </S.Divider>
                          </AccessControl>
                        </S.Divider>
                        <AccessControl OtherCondition={!IsDisplay}>
                          <S.Divider>
                            <S.Divider className="py-3 flex flex-col">
                              <S.Span className="text-md font-medium">
                                Physician Consent
                              </S.Span>
                              <S.Span className="text-sm text-slate-600">
                                By checking you are agreeing to our Terms &
                                Conditions.{" "}
                                <span className="text-blue-600">
                                  Learn more.
                                </span>
                              </S.Span>
                            </S.Divider>
                            <FormGroup>
                              <FormControlLabel
                                name="IsConsulted"
                                control={
                                  <Checkbox
                                    color="success"
                                    disabled={IsEdit}
                                    checked={values.IsConsulted}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "IsConsulted",
                                        e.target.checked,
                                      )
                                    }
                                  />
                                }
                                label={
                                  <>
                                    <span>
                                      I have consulted my physician before
                                      joining this program.
                                      <span className="text-red-500">*</span>
                                    </span>
                                  </>
                                }
                              />
                            </FormGroup>
                          </S.Divider>
                        </AccessControl>
                        <AccessControl OtherCondition={!IsEdit}>
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
