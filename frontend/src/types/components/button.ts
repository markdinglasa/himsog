import { ReactNode } from "react";
import { GenericFunction } from "../utils";

export enum ButtonType {
  button = "button",
  submit = "submit",
}

export enum ButtonColor {
  default = "default",
  primary = "primary",
  blue = "blue",
  gray = "gray",
  red = "red",
  green = "green",
  white = "white",
}
export enum TooltipPlacement {
  topStart = "top-start",
  top = "top",
  topEnd = "top-end",
  left = "left",
  leftStart = "left-start",
  leftEnd = "left-end",
  right = "right",
  rightStart = "right-start",
  rightEnd = "right-end",
  bottom = "bottom",
  bottomStart = "bottom-start",
  bottomEnd = "bottom-end",
}
export interface CircleButtonProps {
  OnClick: any | GenericFunction;
  IsNotification?: boolean;
  Icon: ReactNode;
  Type: ButtonType;
  Color?: ButtonColor;
  Title?: string;
  Disabled?: boolean;
  Placement?: TooltipPlacement;
}
