import { mdiAlertCircleOutline } from "@mdi/js";
import {
  ButtonColor,
  ButtonType,
  ConfirmationDialogProps,
  DialogType,
  ModalStyle,
  SFC,
} from "../../../../types";
import * as S from "./Styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomButton } from "../../../Inputs";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

export const ConfirmationDialog: SFC<ConfirmationDialogProps> = ({
  close,
  title,
  open,
  message,
  confirm,
  dialogType,
}) => {
  const renderIcon = () => {
    if (dialogType === DialogType.delete)
      return <DeleteIcon className="md:text-white text-primary" />;
    return <CheckCircleIcon className="md:text-white text-primary" />;
  };

  const renderText = () => {
    if (dialogType === DialogType.delete) return "Delete";
    return "Confirm";
  };

  const footer = () => (
    <>
      <S.ConfirmationButtons>
        <S.CancelButtonCon>
          <CustomButton
            leftIcon={<CancelIcon className="text-primary" />}
            onClick={close}
            text={"Cancel"}
            color={ButtonColor.default}
            type={ButtonType.button}
          />
        </S.CancelButtonCon>
        <CustomButton
          leftIcon={renderIcon()}
          onClick={confirm}
          text={renderText()}
          type={ButtonType.button}
        />
      </S.ConfirmationButtons>
    </>
  );

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby={title}
      aria-describedby={title}
    >
      <Box sx={ModalStyle}>
        <S.Content>
          <S.MessageContainer>
            <S.Icon path={mdiAlertCircleOutline} size="28px" />
            <S.Message>{message}</S.Message>
          </S.MessageContainer>
          {footer()}
        </S.Content>
      </Box>
    </Modal>
  );
};
