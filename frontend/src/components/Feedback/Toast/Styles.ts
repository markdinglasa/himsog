import { Icon as UIcon } from "@mdi/react";
import styled from "styled-components";
import { colors } from "../../../styles";
import { ToastType } from "../../../types";

export const Container = styled.div`
  background: ${colors.palette.neutral["100"]};
  color: ${colors.primary};
  display: flex;
  padding: 12px;
`;
export const Text = styled.span`
  align-items: center;
  color: #fff;
  display: flex;
`;
export const Icon = styled(UIcon)<{ type: ToastType }>`
  color: ${({ type }) => {
    if (type === ToastType.network) {
      return colors.primary;
    }
    if (type === ToastType.success) {
      return colors.palette.green["400"];
    }
    if (type === ToastType.warning) {
      return colors.palette.yellow["400"];
    }
    return colors.palette.red["400"];
  }};*/;
  margin-right: 12px;
  width: 30px;
  height: 30px;
`;
