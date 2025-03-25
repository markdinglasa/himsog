import { Form, Formik } from "formik";
import {
  ButtonType,
  ConvoTable,
  MessageTable,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks";
// import API from "../../../../../hooks/api";
import { cn, displayToast } from "../../../../../utils";
import * as S from "../../../../../styles/Styles";
import { CircleButton } from "../../../../Inputs";
import SendIcon from "@mui/icons-material/Send";
import { messageValidator } from "../../../../../validators";

export const MessageForm: SFC = ({ ClassName }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { Id } = useParams<{ Id?: string }>();
  const { auth } = useAuth();
  //const { add } = API.Transaction.Message.Add();
  //const { update } = API.Transaction.Message.Update();

  const messageInitial: MessageTable = {
    ConvoId: Number(Id) || 0,
    SenderId: auth.user.Id || 0,
    Contents: "",
    IsRead: false,
  };

  type FormValues = typeof messageInitial;

  const handleSubmit = async (values: FormValues, { setFieldValue }: any) => {
    try {
      const data: MessageTable = { ...values };
      //await add(data);
      const convo: ConvoTable = {
        LastMessage: values.Contents,
        Date: new Date().toLocaleTimeString(),
      };
      //await update(String(Id), convo);

      setFieldValue("Contents", "");
      // onChange();
      resetTextareaHeight();
    } catch (error: any) {
      displayToast(
        error?.response?.data?.Message || error.message,
        ToastType.error,
      );
    }
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    setFieldValue: any,
  ) => {
    setFieldValue("Contents", e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const resetTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    submitForm: () => void,
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitForm();
    }
  };

  return (
    <S.Container className={cn("py-2", ClassName)}>
      <Formik
        initialValues={messageInitial}
        onSubmit={handleSubmit}
        enableReinitialize
        validateOnMount
        validationSchema={messageValidator}
      >
        {({ isValid, isSubmitting, submitForm, setFieldValue, values }) => (
          <Form>
            <S.Divider className="w-full flex flex-row justify-center items-end gap-2">
              <textarea
                ref={textareaRef}
                value={values.Contents}
                onInput={(e) =>
                  handleInput(
                    e as React.ChangeEvent<HTMLTextAreaElement>,
                    setFieldValue,
                  )
                }
                onKeyDown={(e) => handleKeyDown(e, submitForm)}
                className="w-full resize-none min-h-10 max-h-32 bg-slate-100 rounded-3xl outline-none px-3 py-2 font-sans placeholder-gray-500 focus:ring-2 focus:ring-primary overflow-y-auto"
                placeholder="Type a message..."
                aria-label="Aa"
                rows={1}
                name="Contents"
              />
              <CircleButton
                IsNotification={false}
                Icon={<SendIcon className="text-primary" />}
                Type={ButtonType.submit}
                Disabled={!isValid || isSubmitting}
                aria-label="Send message"
              />
            </S.Divider>
          </Form>
        )}
      </Formik>
    </S.Container>
  );
};

export default memo(MessageForm);
