import {
  ButtonColor,
  ButtonType,
  FormProps,
  SFC,
  ToastType,
  MealPlanRating,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { CustomButton, SwitchButton } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { memo, useState } from "react";
import { mealPlanRatingValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks";
import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Skeleton } from "../../../../Feedback";

export const MealPlanRatingForm: SFC<FormProps> = ({
  ClassName,
  Title,
  OnClose,
  IsDisplay = false,
  RecordId,
  OnRefetch,
}) => {
  const { Id } = useParams<{ Id: string }>();
  const MealPlanId: number = RecordId ? Number(RecordId) : Number(Id);
  const { add } = API.Transaction.MealPlanRating.Add();
  const { auth } = useAuth();
  const { data, isLoading } = API.Transaction.MealPlanRating.Get(
    MealPlanId,
    auth?.user ?? 0,
  );
  const InitialValues: MealPlanRating = {
    CreatedBy: data?.CreatedBy || (auth?.user ?? 0),
    UpdatedBy: data?.UpdatedBy || (auth?.user ?? 0),
    Remarks: data?.Remarks || null,
    MealPlanId: data?.MealPlanId || MealPlanId,
    Rate: data?.Rate || 0,
    IsHidden: data?.IsHidden || false,
  };

  const handleSubmit = async (values: MealPlanRating) => {
    try {
      add(values);
      OnRefetch && OnRefetch();
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    } finally {
      OnClose && OnClose();
    }
  };

  const labels: { [index: string]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const [hover, setHover] = useState(-1);

  return (
    <>
      <S.Container className={cn("w-full mt-2", ClassName)}>
        <S.Content className="content">
          <S.Divider className="flex flex-row items-center justify-between">
            <AccessControl OtherCondition={Title !== null}>
              <S.Span className="text-lg font-medium">{Title}</S.Span>
            </AccessControl>
            <S.Divider></S.Divider>
          </S.Divider>
          <S.Divider>
            <Formik
              initialValues={InitialValues}
              onSubmit={handleSubmit}
              enableReinitialize={true}
              validateOnMount={true}
              validationSchema={mealPlanRatingValidator}
            >
              {({
                isValid,
                isSubmitting,
                handleChange,
                dirty,
                resetForm,
                handleBlur,
                setFieldValue,
                values,
                errors,
                touched,
                setTouched,
              }) =>
                !isLoading ? (
                  <Form>
                    <S.Divider className="w-full flex flex-col justify-start items-start mb-2">
                      <S.Divider>
                        <SwitchButton
                          Name="IsHidden"
                          Label="Hide Name"
                          Disabled={IsDisplay}
                          OnChange={(_: any, value: any) => {
                            setFieldValue("IsHidden", value || false);
                            setTouched({ IsHidden: true });
                          }}
                          Values={values.IsHidden}
                          Errors={errors}
                          Touched={touched}
                        />
                      </S.Divider>

                      <S.Divider className="w-full flex flex-row ">
                        <Rating
                          name="hover-feedback"
                          value={values.Rate}
                          precision={0.5}
                          getLabelText={getLabelText}
                          defaultValue={values.Rate}
                          onChange={(_event, newValue) => {
                            setFieldValue("Rate", newValue);
                          }}
                          onChangeActive={(_event, newHover) => {
                            setHover(newHover);
                          }}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                          disabled={IsDisplay}
                        />
                        {values.Rate !== null && (
                          <Box sx={{ ml: 2 }}>
                            {labels[hover !== -1 ? hover : values.Rate]}
                          </Box>
                        )}
                      </S.Divider>
                    </S.Divider>
                    <S.Divider className="w-full mb-2">
                      <S.Label className="text-[#666666] font-medium ml-3">
                        Remarks
                      </S.Label>
                      <textarea
                        placeholder="Remarks"
                        name="Remarks"
                        value={values?.Remarks ?? ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full resize-none p-3 border border-[#C4C4C4] rounded-md"
                        aria-setsize={10}
                        disabled={IsDisplay}
                      />
                    </S.Divider>

                    <AccessControl OtherCondition={!IsDisplay}>
                      <S.Divider className="w-full flex justify-end items-center gap-4 ">
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
                ) : (
                  <Skeleton />
                )
              }
            </Formik>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(MealPlanRatingForm);
