import { Icon as UIcon } from "@mdi/react";
import { colors } from "../../../../styles";
import styled from "styled-components";

export const ConfirmationButtons = styled.div`
  border-top: 1px solid ${colors.palette.neutral["200"]};
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
export const MessageContainer = styled.div`
  padding: 1rem 1rem;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const Message = styled.div`
  align-items: center;
  display: flex;
  margin-left: 10px;
  font-size: 16px;
  color: ${colors.palette.neutral["900"]};
`;
export const Icon = styled(UIcon)`
  color: ${colors.palette.neutral["600"]};
`;
export const CancelButtonCon = styled.div`
  margin-right: 8px;
`;
export const Content = styled.div``;
