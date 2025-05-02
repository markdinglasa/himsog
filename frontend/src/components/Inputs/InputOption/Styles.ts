import styled from "styled-components";
import { colors } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 8px;
  color: ${colors.primary};
`;
export const Input = styled.input<{ $isDisabled: boolean }>`
  width: 100%;
  padding: 0 8px;
  border-radius: 6px;
  ${({ $isDisabled }) =>
    $isDisabled
      ? `border:1px solid ${colors.palette.neutral["100"]}; background:${colors.white};`
      : ""}
`;
