import { Form, Formik } from "formik";
import {
  AutoComplete,
  CustomButton,
  Skeleton,
} from "../../../../../components";
import {
  ButtonType,
  HealthConditionTable,
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

const HealthConditionForm: SFC<SetupForm> = ({ ClassName, IsAllergen }) => {
  const { auth } = useAuth();
  const { data, isLoading } = API.Setup.Health.Get(auth?.user ?? 0);
  const { add } = API.Setup.HealthCondition.Add();
  //console.log("data:", data);
  const InitialValues: HealthConditionTable = {
    HealthId: data?.Id || 0,
    Category: IsAllergen ? "allergen" : " dietery-preference",
    Description: "",
  };
  const handleSubmit = async (values: HealthConditionTable): Promise<void> => {
    try {
      add(values);
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
                            <AutoComplete
                              Label={
                                IsAllergen
                                  ? "What are your allergen?"
                                  : "What are your dietary preferences?"
                              }
                              IsTooltip={true}
                              ClassName="h-full"
                              TooltipMessage="Help Description here"
                              Values={values.Description}
                              Options={
                                IsAllergen ? Allergen : DieteryPreferences
                              }
                              Name="Description"
                              OptionName="Label"
                              Placeholder={
                                IsAllergen ? "e.g Peanuts" : "e.g. Gluten-Free"
                              }
                              OnChange={(_: any, value: any) => {
                                setFieldValue("Description", value?.Id || "");
                                setTouched({ Description: true });
                              }}
                              OnBlur={handleBlur}
                              Errors={errors}
                              Touched={touched}
                            />
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
