import { ReactNode } from "react";

export interface Modal {
  close(): void;
  handleRecordOnSave: any;
}

export interface ModalProps {
  children: ReactNode;
  close?: () => void;
  disableOverlayClick?: boolean;
  footer?: ReactNode;
  header: string;
  isPopUp?: boolean;
}

export const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  p: 2,
};
