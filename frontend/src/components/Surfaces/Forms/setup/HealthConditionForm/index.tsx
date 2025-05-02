import { Form, Formik } from "formik";
import {
  AccessControl,
  AutoComplete,
  CustomButton,
  CustomInput,
  Skeleton,
} from "../../../../../components";
import {
  ButtonType,
  HealthConditionTable,
  InputType,
  SetupForm,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo } from "react";
import { Allergen, DieteryPreferences, Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { displayToast } from "../../../../../utils";
import { healthConditionValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";

const HealthConditionForm: SFC<SetupForm> = ({
  ClassName,
  IsAllergen,
  Title,
}) => {
  const { auth } = useAuth();
  const { data, isLoading } = API.Setup.Health.Get(auth?.user ?? 0);
  const { add } = API.Setup.HealthCondition.Add();
  // console.log("data:", data);
  const InitialValues: HealthConditionTable = {
    HealthId: data?.Id || 0,
    Category: IsAllergen ? "allergen" : "dietery-preference",
    Description: "",
  };
  const handleSubmit = async (values: HealthConditionTable): Promise<void> => {
    try {
      values.Description = values?.OtherDescription
        ? String(values?.OtherDescription)
        : String(values?.Description);
      const { OtherDescription, ...filtered } = values;
      add(filtered);
    } catch (error: any) {
      displayToast(error.message || Error.m00001, ToastType.error);
    }
  };

  return (
    <S.Container className={ClassName}>
      <S.Content className="flex justify-center flex-col items-center w-full ">
        <S.FormHeader className="flex flex-row items-center justify-between mb-3">
          <S.Span className="text-lg text-slate-900">{Title}</S.Span>
          <S.Divider></S.Divider>
        </S.FormHeader>
        <S.Divider className="flex  w-full  justify-center items-center ">
          <S.Divider className=" w-full">
            <S.Divider className="w-full">
              <S.Divider className="">
                <Formik
                  initialValues={InitialValues}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                  validateOnMount={true}
                  validationSchema={healthConditionValidator}
                >
                  {({
                    errors,
                    touched,
                    isSubmitting,
                    handleBlur,
                    setFieldValue,
                    values,
                    setTouched,
                    isValid,
                  }) =>
                    !isLoading ? (
                      <Form>
                        <S.Divider className="w-full pb-1 flex flex-row items-center justify-center gap-2  h-[80px]">
                          <S.Divider className="w-full h-full  flex items-center justify-center">
                            <AccessControl
                              OtherCondition={values.Description !== "other"}
                            >
                              <AutoComplete
                                Label={
                                  IsAllergen
                                    ? "What are your allergen?"
                                    : "What are your dietary preferences?"
                                }
                                IsTooltip={true}
                                ClassName="h-full"
                                TooltipMessage={
                                  IsAllergen
                                    ? "An allergen is an otherwise harmless substance that triggers an allergic reaction in sensitive individuals by stimulating an immune response."
                                    : "Dietary preference refers to the specific choices individuals make regarding the foods they consume, often influenced by health considerations, ethical beliefs, cultural norms, and personal tastes."
                                }
                                Values={values.Description}
                                Options={
                                  IsAllergen ? Allergen : DieteryPreferences
                                }
                                Name="Description"
                                OptionName="Label"
                                Placeholder={
                                  IsAllergen
                                    ? "e.g Peanuts"
                                    : "e.g. Gluten-Free"
                                }
                                OnChange={(_: any, value: any) => {
                                  setFieldValue("Description", value?.Id || "");
                                  setTouched({ Description: true });
                                }}
                                OnBlur={handleBlur}
                                Errors={errors}
                                Touched={touched}
                              />
                            </AccessControl>

                            <AccessControl
                              OtherCondition={values.Description === "other"}
                            >
                              <div className="w-full">
                                <CustomInput
                                  ClassName="w-full"
                                  placeholder={
                                    IsAllergen
                                      ? "Other Allergies"
                                      : "Other Dietery Preference"
                                  }
                                  label={
                                    IsAllergen
                                      ? "Other Allergies"
                                      : "Other Dietery Preference"
                                  }
                                  name="OtherDescription"
                                  errors={errors}
                                  touched={touched}
                                  value={values.OtherDescription}
                                  onChange={(e: any) => {
                                    setFieldValue(
                                      "OtherDescription",
                                      e.target?.value || "",
                                    );
                                    setTouched({
                                      OtherDescription: true,
                                    });
                                  }}
                                  onBlur={handleBlur}
                                  type={InputType.text}
                                />
                              </div>
                            </AccessControl>
                          </S.Divider>
                          <S.Divider className="h-full  flex items-center justify-center">
                            <CustomButton
                              leftIcon={<Icon.Add />}
                              text="Add"
                              disabled={!isValid || isSubmitting}
                              type={ButtonType.submit}
                              morph={false}
                            />
                          </S.Divider>
                        </S.Divider>
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

export default memo(HealthConditionForm);
