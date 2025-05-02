import {
  ButtonColor,
  ButtonType,
  FormProps,
  IngredientTable,
  InputType,
  SFC,
  ToastType,
  UnitTable,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { AutoComplete, CustomButton, CustomInput } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { Skeleton } from "../../../../Feedback";
import { memo } from "react";
import { ingredientValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useParams } from "react-router-dom";

export const IngridientForm: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  RecordId = 0,
  OnClose,
}) => {
  const IsEdit = IsDetails;
  const { Id } = useParams<{ Id: string }>();
  const { add } = API.Setup.Ingredient.Add();
  const { update } = API.Setup.Ingredient.Update();
  const { data, isLoading } = API.Setup.Ingredient.Get(Number(RecordId));
  const { data: units } = API.Setup.Unit.GetAll();

  const InitialValues: IngredientTable = {
    Name: data?.Name || "",
    Quantity: data?.Quantity || 0,
    UnitId: data?.UnitId || 0,
    MealId: data?.MealId || Number(Id),
  };

  const handleSubmit = async (values: IngredientTable) => {
    try {
      if (Number(RecordId) !== 0) update(Number(RecordId), values);
      else add(values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    } finally {
      OnClose && OnClose();
    }
  };

  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="content">
          {!isLoading ? (
            <S.Divider>
              <Formik
                initialValues={InitialValues}
                onSubmit={handleSubmit}
                enableReinitialize={true}
                validateOnMount={true}
                validationSchema={ingredientValidator}
              >
                {({
                  errors,
                  touched,
                  isValid,
                  isSubmitting,
                  handleChange,
                  dirty,
                  values,
                  resetForm,
                  handleBlur,
                  setFieldValue,
                  setTouched,
                }) => (
                  <Form>
                    <S.Divider className="w-full flex flex-col gap-1">
                      <S.Divider className="w-full mb-2">
                        <CustomInput
                          placeholder="e.g. Ginger"
                          label="Name"
                          name="Name"
                          errors={errors}
                          touched={touched}
                          value={values.Name}
                          onChange={handleChange}
                          disabled={IsEdit}
                          type={InputType.text}
                        />
                      </S.Divider>

                      <S.Divider className="w-full flex md:flex-row flex-col gap-4 mb-2">
                        <S.Divider className="w-full -mt-2">
                          <AutoComplete
                            Placeholder="Select Unit"
                            Options={units ?? []}
                            OptionName="Name"
                            Name="UnitId"
                            Label="Unit"
                            Values={values.UnitId}
                            Errors={errors}
                            Touched={touched}
                            IsEdit={IsEdit}
                            OnBlur={handleBlur}
                            OnChange={(_: any, value: UnitTable) => {
                              setFieldValue("UnitId", value?.Id || 0);
                              setTouched({ UnitId: true });
                            }}
                          />
                        </S.Divider>
                        <S.Divider className="w-full ">
                          <CustomInput
                            placeholder="Quantity"
                            label="Quantity"
                            name="Quantity"
                            errors={errors}
                            touched={touched}
                            value={values?.Quantity?.toString()}
                            onChange={handleChange}
                            disabled={IsEdit}
                            type={InputType.number}
                          />
                        </S.Divider>
                      </S.Divider>
                    </S.Divider>
                    <AccessControl OtherCondition={!IsEdit}>
                      <S.Divider className="w-full flex justify-end items-center gap-4">
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
                    </AccessControl>
                  </Form>
                )}
              </Formik>
            </S.Divider>
          ) : (
            <Skeleton />
          )}
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(IngridientForm);
