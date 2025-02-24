import styled from "styled-components";
import { colors } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  height: 2.5rem;
  background: ${colors.white};
  color: rgb(39, 39, 42);
  display: flex;
  flex-direction: row;
  justify-content: between;
  padding: 0 12px;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const LeftContent = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;
export const RightContent = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;
