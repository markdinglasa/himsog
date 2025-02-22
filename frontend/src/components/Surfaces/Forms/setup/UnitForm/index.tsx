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
//import { unitValidator } from "../../../../../validators";
import { cn, displayToast } from "../../../../../utils";
import EditIcon from "@mui/icons-material/Edit";
import { Skeleton } from "../../../../Feedback";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import { useAuth } from "../../../../../hooks";
import { unitValidator } from "../../../../../validators";

export const UnitForm: SFC<FormProps> = ({
  ClassName,
  Title = "NA",
  IsDetails = true,
}) => {
  const [IsEdit, SetIsEdit] = useState(IsDetails);
  //const { Id } = useParams<{ Id: string }>();
  //const { records, loading } = useGetUnit(Number(Id ?? 0));
  //const { update } = useUpdateUnit();
  //const { add } = useAddUnit();
  const { auth } = useAuth();

  const flag: boolean = false; //IsDetails ? Id !== "" && loading : false;
  const InitialValues: UnitTable = {
    Name: "",
    Description: null,
    CreatedBy: auth?.user ?? 0,
    UpdatedBy: IsDetails ? auth?.user : null,
  };

  const handleSubmit = async (_values: UnitTable) => {
    try {
      //if (Id) await update(Id, values);
      //else await add(values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    }
  };

  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="content">
          <S.FormHeader className="flex flex-row items-center justify-between">
            <S.Span className="text-lg text-slate-900">{Title}</S.Span>
            <S.Divider>
              <CircleButton
                OnClick={() => SetIsEdit(false)}
                Icon={<EditIcon className="text-primary" />}
                Type={ButtonType.button}
              />
            </S.Divider>
          </S.FormHeader>
          {!flag ? (
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
                      <S.Divider className="w-full flex justify-end pt-2 pb-1 items-center border-t gap-2 mt-2">
                        <CustomButton
                          icon={<CancelIcon className="text-primary" />}
                          text="Cancel"
                          onClick={() => {
                            if (IsDetails) SetIsEdit(true);
                            resetForm();
                          }}
                          color={ButtonColor.default}
                          type={ButtonType.button}
                        />
                        <CustomButton
                          icon={
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
