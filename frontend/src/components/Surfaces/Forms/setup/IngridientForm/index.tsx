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
import {
  AutoComplete,
  CircleButton,
  CustomButton,
  CustomInput,
} from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { Skeleton } from "../../../../Feedback";
import { memo, useState } from "react";
import { useAuth } from "../../../../../hooks";
import { ingredientValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useParams } from "react-router-dom";
import { ingredientCategoryOptions } from "../../../../../shared";

export const IngridientForm: SFC<FormProps> = ({
  ClassName,
  Title = "NA",
  IsDetails = true,
}) => {
  const [IsEdit, SetIsEdit] = useState(IsDetails);
  const { Id } = useParams<{ Id: string }>();
  const { auth } = useAuth();
  const { add } = API.Setup.Ingredient.Add();
  const { update } = API.Setup.Ingredient.Update();
  const { data, isLoading } = API.Setup.Ingredient.Get(Number(Id));
  const { data: units } = API.Setup.Unit.GetAll();

  const InitialValues: IngredientTable = {
    Name: data?.Name || "",
    Description: data?.Description || null,
    UnitId: data?.UnitId || 0,
    Category: data?.Category || "",
    CreatedBy: data?.CreatedBy || (auth?.user ?? 0),
    UpdatedBy: IsDetails ? auth?.user : null,
    Quantity: data?.Quantity || 0,
  };

  const handleSubmit = async (values: IngredientTable) => {
    try {
      if (Id) update(Number(Id), values);
      else add(values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    }
  };

  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="content">
          <S.FormHeader className="flex flex-row items-center justify-between mb-4">
            <S.Span className="text-lg text-slate-900">{Title}</S.Span>
            <S.Divider>
              <AccessControl OtherCondition={IsEdit}>
                <CircleButton
                  OnClick={() => SetIsEdit(false)}
                  Icon={<Icon.Edit className="text-primary" />}
                  Type={ButtonType.button}
                />
              </AccessControl>
            </S.Divider>
          </S.FormHeader>
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
                      <S.Divider className="w-full ">
                        <CustomInput
                          placeholder="e.g. Zingiber officinale"
                          label="Description (optional)"
                          name="Description"
                          errors={errors}
                          touched={touched}
                          value={values.Description ?? ""}
                          onChange={handleChange}
                          disabled={IsEdit}
                          type={InputType.text}
                        />
                      </S.Divider>
                      <S.Divider className="w-full flex md:flex-row flex-col gap-4 mb-2">
                        <S.Divider className="w-full ">
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
                        <S.Divider className="w-full">
                          <AutoComplete
                            Placeholder="Select Category"
                            Options={ingredientCategoryOptions}
                            Name="Category"
                            OptionName="label"
                            Label="Category"
                            Values={values.Category}
                            Errors={errors}
                            Touched={touched}
                            IsEdit={IsEdit}
                            OnBlur={handleBlur}
                            OnChange={(_: any, value: any) => {
                              setFieldValue("Category", value?.Id || "");
                              setTouched({ Category: true });
                            }}
                          />
                        </S.Divider>
                      </S.Divider>
                    </S.Divider>
                    <S.Divider className="w-full py-1">
                      <CustomInput
                        placeholder="Quantity"
                        label="Quantity"
                        name="Quantity"
                        errors={errors}
                        touched={touched}
                        value={values.Quantity.toString()}
                        onChange={handleChange}
                        disabled={IsEdit}
                        type={InputType.number}
                      />
                    </S.Divider>
                    <AccessControl OtherCondition={!IsEdit}>
                      <S.Divider className="w-full flex justify-end items-center gap-4 mt-2 ">
                        <CustomButton
                          leftIcon={<Icon.Cancel className="text-primary" />}
                          text="Cancel"
                          onClick={() => {
                            if (IsDetails) SetIsEdit(true);
                            resetForm();
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
