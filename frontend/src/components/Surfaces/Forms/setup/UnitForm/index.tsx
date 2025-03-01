import {
  ButtonColor,
  ButtonType,
  FormProps,
  InputType,
  SFC,
  ToastType,
  UnitTable,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { CircleButton, CustomButton, Input } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { Skeleton } from "../../../../Feedback";
import { useState } from "react";
import { useAuth } from "../../../../../hooks";
import { unitValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useParams } from "react-router-dom";

export const UnitForm: SFC<FormProps> = ({
  ClassName,
  Title = "NA",
  IsDetails = true,
}) => {
  const [IsEdit, SetIsEdit] = useState(IsDetails);
  const { Id } = useParams<{ Id: string }>();
  const { auth } = useAuth();
  const { add } = API.Setup.Unit.Add();
  const { update } = API.Setup.Unit.Update();
  const { data, isLoading } = API.Setup.Unit.Get(Number(Id));

  const InitialValues: UnitTable = {
    Name: data?.Name || "",
    Description: data?.Description || null,
    CreatedBy: data?.CreatedBy || (auth?.user ?? 0),
    UpdatedBy: IsDetails ? auth?.user : null,
  };

  const handleSubmit = async (values: UnitTable) => {
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
              <AccessControl OtherCondition={IsDetails}>
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
                validationSchema={unitValidator}
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
                }) => (
                  <Form>
                    <S.Divider className="w-full mb-2">
                      <Input
                        placeholder="e.g. Kg(s)"
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
                    <S.Divider className="w-full">
                      <Input
                        placeholder="e.g. Kilogram(s)"
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
                    {!IsEdit && (
                      <S.Divider className="w-full flex justify-end items-center border-t gap-4 mt-4 pt-4">
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
                    )}
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
