import { Icon as UIcon } from "@mdi/react";
import { colors } from "../../../../styles";
import styled from "styled-components";

export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
export const MessageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: end;
  width: 100%;
`;
export const Message = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  font-size: 16px;
  width: 90%;
  color: ${colors.palette.neutral["900"]};
`;
export const Icon = styled(UIcon)`
  color: ${colors.palette.neutral["600"]};
`;
export const CancelButtonCon = styled.div`
  margin-right: 8px;
`;
export const Content = styled.div``;
