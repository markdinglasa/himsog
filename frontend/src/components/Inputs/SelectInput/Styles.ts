import { colors } from "../../../styles";
import { Field as UField } from "formik";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  wifth: 100%;
  flex-direction: column;
  align-items: start;
`;
export const ErrorMessage = styled.div`
  color: ${colors.palette.red["500"]};
  font-size: 10px;
`;
export const Label = styled.label`
  font-size: 12px;
  width: 100%;
`;

export const Field = styled(UField)`
  border: 1px solid
    ${({ $error }) => ($error ? colors.palette.red["500"] : "#e0e0e")};

  display: block;
  height: 40px;
  padding: 10px 14px;
  width: 100%;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SecondaryContainer = styled.div`
  margin-bottom: 8px;
`;

export const Option = styled.option`
  background-color: ${colors.palette.neutral[
    "075"
  ]}; /* Example background color */

  padding: 10px; /* Example padding */
  min-height: 40px;
  width: 100px;
  padding: 10px 10px;
  transition: all 0.3s & {
    background: ${colors.pink};
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: start;
`;
