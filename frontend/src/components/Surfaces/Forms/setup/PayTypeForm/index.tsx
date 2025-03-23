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
  PayTypeTable,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo, useState } from "react";
import { Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { displayToast } from "../../../../../utils";
import { professionValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const PayTypeForm: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  RecordId,
  OnClose,
  Title,
}) => {
  const [IsEdit, SetIsEdit] = useState<boolean>(IsDetails);
  const { auth } = useAuth();
  const { add } = API.Setup.PayType.Add();
  const { update } = API.Setup.PayType.Update();
  const { data, isLoading } = API.Setup.PayType.Get(Number(RecordId));

  const InitialValues: PayTypeTable = {
    UserId: data?.UserId || (auth?.user ?? 0),
    Name: data?.Name || "",
    Holder: data?.Holder || "",
    MobileNumber: data?.MobileNumber || "",
    Image: data?.Image || null,
  };

  const handleSubmit = async (values: PayTypeTable): Promise<void> => {
    try {
      if (Object.keys(data).length !== 0) update(Number(data.Id), values);
      else add(values);
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
                  validationSchema={professionValidator}
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
                          <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                              Online Payment Method
                            </FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="gcash"
                              name="Name"
                            >
                              <FormControlLabel
                                value="gcash"
                                control={<Radio />}
                                label="GCash"
                              />
                              <FormControlLabel
                                value="maya"
                                control={<Radio />}
                                label="Maya"
                              />
                              <FormControlLabel
                                value="gotyme"
                                control={<Radio />}
                                label="GoTyme"
                              />
                            </RadioGroup>
                          </FormControl>
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            disabled={IsEdit}
                            label="Holder"
                            value={values?.Holder.toString()}
                            placeholder="e.g. Juan Dela Cruz"
                            name="Holder"
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
                            label="Mobile Number"
                            value={values?.MobileNumber}
                            placeholder="+639 000-000-0000"
                            name="MobileNumber"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full mb-[1rem]">
                          <S.Divider className="w-full border-dashed border-2 border-[#C4C4C4] min-h-[10rem] rounded-md flex flex-col items-center justify-center">
                            <S.Span>
                              <FolderOpenIcon
                                className="text-slate-600"
                                fontSize="small"
                              />
                            </S.Span>
                            <S.Span className="text-sm text-slate-600 text-center">
                              Drag & drop your supporting document or click the
                              button to browse.
                            </S.Span>
                            <S.Span className="text-sm text-slate-600 mb-3">
                              PDF, JPG, PNG (max 3MB)
                            </S.Span>
                            <CustomButton
                              morph={false}
                              text="Upload Document"
                              color={ButtonColor.default}
                            />
                          </S.Divider>
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

export default memo(PayTypeForm);
