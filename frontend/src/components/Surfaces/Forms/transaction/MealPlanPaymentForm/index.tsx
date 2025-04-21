import {
  ButtonColor,
  ButtonType,
  Currency,
  FormProps,
  InputType,
  PaymentTable,
  Roles,
  RouteChannel,
  SFC,
  ToastType,
} from "../../../../../types";
import * as S from "../../../../../styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Form, Formik } from "formik";
import { CustomButton, CustomInput } from "../../../../Inputs";

import {
  cn,
  displayToast,
  formatDateForInput,
  renderPath,
} from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { Skeleton } from "../../../../Feedback";
import { memo, useRef, useState } from "react";
import { useAuth } from "../../../../../hooks";
import { paymentValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { mdiWalletBifoldOutline } from "@mdi/js";
import UIcon from "@mdi/react";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

export const PaymentForm: SFC<FormProps> = ({ ClassName, Title = "NA" }) => {
  const navigate = useNavigate();
  const { Id } = useParams<{ Id: string }>(); // MealPlanId
  const { auth } = useAuth();
  const path = `${renderPath(auth?.roles as Roles)}/meal-plan`;
  const { add } = API.Transaction.Payment.Add(
    path as RouteChannel,
    "Payment is processed for verification",
  );
  const { data: mealplan, isLoading } = API.Setup.MealPlan.Get(Number(Id));

  const { data: vendor } = API.Setup.PayType.GetAll(
    Number(mealplan?.UserId ?? 0),
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { upload } = API.Utility.UploadImage();

  const InitialValues: PaymentTable = {
    TransactionDate: formatDateForInput(new Date().toString()),
    TransactionId: `${auth?.user}${mealplan?.Id ?? 0}`,
    UserId: auth?.user || 0,
    SubscriptionId: null,
    MealPlanId: Number(Id),
    Currency: Currency.PHP,
    Amount: parseFloat(mealplan?.Price) || 0,
    Method: vendor?.[0]?.Name ?? "NA",
    IsSubscription: false,
    IsMealPlan: true,
    SubscriptionData: null,
    MealPlanData: {
      Remark: null,
      Image: "NA",
      Status: false,
      Notes: null,
      IsDisapproved: false,
    },
  };

  const handleSubmit = async (values: PaymentTable) => {
    try {
      const formData = new FormData();
      let imagePath;
      if (imageFile) {
        formData.append("image", imageFile);
        imagePath = await upload(formData);
      }
      if (values.MealPlanData) {
        values.MealPlanData.Image = imagePath || null;
      }

      add(values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    }
  };

  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="content">
          <S.Divider className="mb-[1rem]">
            <S.Span className="text-lg font-medium">{Title}</S.Span>
          </S.Divider>

          {!isLoading ? (
            <S.Divider>
              <Formik
                initialValues={InitialValues}
                onSubmit={handleSubmit}
                enableReinitialize={true}
                validateOnMount={true}
                validationSchema={paymentValidator} // is not working as it should
              >
                {({
                  isValid,
                  isSubmitting,
                  resetForm,
                  setFieldValue,
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                }) => (
                  <Form>
                    <S.Divider className="w-full flex flex-row gap-[1rem] mb-[1rem] overflow-hidden">
                      <S.Divider className="w-full flex flex-col gap-1">
                        <S.Divider className="w-full py-1">
                          <FormControl className="w-full">
                            <S.Span className="text-[12px] ml-3">
                              Online Payment Method
                            </S.Span>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              name="Method"
                              className="border w-full rounded-md px-2"
                              value={values.Method}
                              onChange={(e) =>
                                setFieldValue("Method", e.target.value)
                              }
                            >
                              <FormControlLabel
                                value="gcash"
                                control={
                                  <Radio
                                    size="small"
                                    sx={{
                                      color: S.colors.primary,
                                      "&.Mui-checked": {
                                        color: S.colors.primary,
                                      },
                                    }}
                                    checked={
                                      (vendor?.[0]?.Name ?? "NA") === "gcash"
                                    }
                                  />
                                }
                                label={
                                  <>
                                    <div className="flex items-center gap-2 justify-center flex-row text-left">
                                      <UIcon
                                        path={mdiWalletBifoldOutline}
                                        size={1}
                                        className="text-green-400"
                                      />
                                      <span>GCash</span>
                                    </div>
                                  </>
                                }
                              />
                            </RadioGroup>
                          </FormControl>
                        </S.Divider>
                        <S.Divider className="w-full flex flex-col mb-2">
                          <S.Span className="text-[12px] ml-3">
                            Account Holder
                          </S.Span>
                          <S.Divider className=" border rounded-md p-2">
                            <S.Span className="text-sm font-medium">
                              {vendor?.[0]?.Holder ?? "NA"}
                            </S.Span>
                          </S.Divider>
                        </S.Divider>
                        <S.Divider className="w-full flex flex-col mb-[1rem]">
                          <S.Span className="text-[12px] ml-3">
                            {vendor?.[0]?.Name ?? "NA"} Mobile Number
                          </S.Span>
                          <S.Divider className=" border rounded-md p-2">
                            <S.Span className="text-sm font-medium">
                              {vendor?.[0]?.MobileNumber ?? "NA"}
                            </S.Span>
                          </S.Divider>
                        </S.Divider>
                        <S.Divider className="w-full">
                          <CustomInput
                            placeholder=""
                            label="Notes (Optional)"
                            name="MealPlanData.Remark"
                            errors={errors}
                            touched={touched}
                            value={values.MealPlanData?.Remark ?? ""}
                            onChange={handleChange}
                            disabled={false}
                            type={InputType.text}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full mb-[1rem]">
                          <S.Divider className="w-full relative border-dashed border-2 border-[#C4C4C4] min-h-[10rem] rounded-md flex flex-col items-center justify-center">
                            <label>
                              <input
                                id="upload-image"
                                type="file"
                                accept="image/*"
                                name="Image"
                                ref={fileInputRef}
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    setImageFile(file);
                                  }
                                }}
                                disabled={false}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                              />
                            </label>
                            <S.Span>
                              <FolderOpenIcon className="text-slate-600" />
                            </S.Span>
                            {!imageFile ? (
                              <>
                                <S.Span className="text-sm text-slate-600 text-center">
                                  Drag & drop your proof of payment or click the
                                  button to browse.
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
                              text="Upload Image"
                              onClick={() => fileInputRef.current?.click()}
                              type={ButtonType.button}
                              color={ButtonColor.default}
                              disabled={false}
                            />
                          </S.Divider>
                        </S.Divider>
                      </S.Divider>
                      <AccessControl
                        OtherCondition={
                          typeof vendor?.[0]?.Image === "string" &&
                          vendor?.[0]?.Image.length > 0 // should display if there is an image
                        }
                      >
                        <S.Divider className="w-[30rem] h-[35rem] mb-2">
                          <S.Span className="text-sm">QR Code</S.Span>
                          <S.Image
                            src={vendor?.[0]?.Image ?? ""}
                            className="w-full h-full "
                          />
                        </S.Divider>
                      </AccessControl>
                    </S.Divider>
                    <AccessControl OtherCondition={true}>
                      <S.Divider className="w-full flex justify-end items-center gap-4 mt-[1rem] ">
                        <CustomButton
                          leftIcon={<Icon.Cancel className="text-primary" />}
                          text="Cancel"
                          onClick={() => {
                            navigate(path);
                            resetForm();
                          }}
                          color={ButtonColor.default}
                          type={ButtonType.button}
                        />
                        <CustomButton
                          leftIcon={
                            <ShoppingCartIcon className="text-primary md:text-white" />
                          }
                          disabled={!isValid || isSubmitting}
                          text="Pay Now"
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

export default memo(PaymentForm);
