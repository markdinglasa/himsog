import { mdiAlertCircleOutline } from "@mdi/js";
import { ButtonType, ModalStyle, SFC } from "../../types";
import { CustomButton } from "../../components";
import * as S from "./Styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Modal } from "@mui/material";
import { memo } from "react";

interface SessionExpiredModalProps {
  confirm(): void;
  close(): void;
  title: string;
  open: boolean;
}

const SessionExpiredModal: SFC<SessionExpiredModalProps> = ({
  title,
  close,
  confirm,
  open,
}) => {
  const footer = () => (
    <>
      <S.ConfirmCon>
        <CustomButton
          icon={<CheckCircleIcon className="md:text-white text-primary" />}
          text="Confirm"
          onClick={confirm}
          type={ButtonType.button}
        />
      </S.ConfirmCon>
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
        <S.MessageContainer className="w-full">
          <S.Icon path={mdiAlertCircleOutline} size="28px" />
          <S.Message>Session has expired.</S.Message>
        </S.MessageContainer>
        {footer()}
      </Box>
    </Modal>
  );
};

export default memo(SessionExpiredModal);
