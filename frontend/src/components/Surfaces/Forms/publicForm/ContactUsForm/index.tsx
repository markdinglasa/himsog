import {
  ButtonColor,
  ButtonType,
  ContactUsTable,
  FormProps,
  InputType,
  SFC,
  ToastType,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { CustomButton, CustomInput } from "../../../../Inputs";
import { cn, displayToast } from "../../../../../utils";
import { contactUsValidator } from "../../../../../validators";
import { memo } from "react";

export const ContactUsForm: SFC<FormProps> = ({ ClassName, Title = "NA" }) => {
  const InitialValues: ContactUsTable = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Message: "",
  };

  const handleSubmit = async (values: ContactUsTable) => {
    try {
      //const response = await axios.
      console.log(values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    }
  };

  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="content">
          <S.FormHeader className="flex flex-row items-center justify-between mb-5">
            <S.Span className="text-lg text-slate-900">{Title}</S.Span>
          </S.FormHeader>
          <S.Divider>
            <Formik
              initialValues={InitialValues}
              onSubmit={handleSubmit}
              validationSchema={contactUsValidator}
            >
              {({
                errors,
                touched,
                isValid,
                isSubmitting,
                handleChange,
                dirty,
                resetForm,
                handleBlur,
              }) => (
                <Form>
                  <S.Divider className="w-full flex md:flex-row flex-col md:gap-2">
                    <S.Divider className="w-full py-1">
                      <CustomInput
                        errors={errors}
                        type={InputType.text}
                        label="First Name"
                        placeholder="First Name"
                        name="Firstname"
                        touched={touched}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </S.Divider>
                    <S.Divider className="w-full py-1">
                      <CustomInput
                        errors={errors}
                        type={InputType.text}
                        label="Last Name"
                        placeholder="Last Name"
                        name="Lastname"
                        touched={touched}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </S.Divider>
                  </S.Divider>
                  <S.Divider className="w-full py-1">
                    <CustomInput
                      errors={errors}
                      type={InputType.text}
                      label="Email"
                      placeholder="Email"
                      name="Email"
                      touched={touched}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </S.Divider>
                  <S.Divider className="w-full py-1">
                    <textarea
                      className="w-full h-[300px] p-3 bg-inherit border border-[#C4C4C4] hover:border-[#202020] resize-none"
                      placeholder="Leave a Message"
                      name="Message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </S.Divider>

                  <S.Divider className="w-full flex justify-end pt-2 pb-1 items-center gap-2 mt-2">
                    <CustomButton
                      text="Cancel"
                      onClick={() => resetForm()}
                      color={ButtonColor.default}
                      type={ButtonType.button}
                      morph={false}
                    />
                    <CustomButton
                      disabled={!dirty || !isValid || isSubmitting}
                      text="Send Message"
                      type={ButtonType.submit}
                      morph={false}
                    />
                  </S.Divider>
                </Form>
              )}
            </Formik>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(ContactUsForm);
