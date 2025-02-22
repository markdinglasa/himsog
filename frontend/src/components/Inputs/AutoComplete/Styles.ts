import styled from "styled-components";
import { colors } from "../../../styles";
import { Autocomplete as AC, TextField as TF } from "@mui/material";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 8px;
  color: ${colors.primary};
`;
export const Content = styled.div`
  width: 100%;
`;
export const ErrorCon = styled.div`
  width: 100%;
  margin-top: -8px;
`;
export const ErrorMessage = styled.span`
  color: ${colors.palette.red["500"]};
  font-size: 12px;
`;

export const AutoComplete = styled(AC)<{ $isEdit: boolean }>(({ $isEdit }) => ({
  width: "100%",
  height: "40px",
  alignItems: "center",
  display: "flex",
  marginBottom: "8px",
  transition: "0.3s ease-in-out",
  borderRadius: "4px",
  background: $isEdit ? colors.white : colors.palette.neutral["075"],
  border: $isEdit ? `1px solid ${colors.palette.neutral["100"]}` : "none",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
}));

export const TextField = styled(TF)``;
