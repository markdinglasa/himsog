import styled from "styled-components";
import { colors } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  position: relative;
`;
export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 6px;
  color: ${colors.primary};
`;
export const Select = styled.select<{ $disabled: boolean }>`
  outline: none;
  height: 40px;
  color: rgb(39, 39, 42);
  width: 100%;
  ${({ $disabled }) =>
    $disabled
      ? `1px solid ${colors.palette.neutral["100"]}; background:${colors.white};`
      : ""}
`;
export const Option = styled.option`
  height: 3.5rem;
  border: 1px solid red;
  background: ${colors.white};
  color: rgb(39, 39, 42);
  width: 500px;
`;
