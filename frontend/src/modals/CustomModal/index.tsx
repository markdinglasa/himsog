import { ButtonColor, ButtonType, ModalStyle, SFC } from "../../types";
import { CircleButton } from "../../components";
import * as S from "../../styles";
import { Box, Modal } from "@mui/material";
import { cn } from "../../utils";
import CloseIcon from "@mui/icons-material/Close";
import { memo } from "react";

interface CustomeModalProps {
  close(): void;
  title: string;
  children: React.ReactNode;
  open: boolean;
}

const CustomeModal: SFC<CustomeModalProps> = ({
  ClassName,
  title,
  close,
  children,
  open,
}) => {
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby={title}
      aria-describedby={title}
    >
      <Box sx={ModalStyle}>
        <S.Container className={cn("w-full flex flex-col p-1", ClassName)}>
          <S.Divider className="w-full flex flex-row justify-between items-center mb-2">
            <S.Span className="">{title}</S.Span>
            <CircleButton
              Color={ButtonColor.default}
              OnClick={close}
              ClassName="bg-none"
              Icon={<CloseIcon className="text-primary" />}
              Type={ButtonType.button}
            />
          </S.Divider>
          <S.Content>{children}</S.Content>
        </S.Container>
      </Box>
    </Modal>
  );
};
export default memo(CustomeModal);
