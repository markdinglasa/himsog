import { ReactNode } from "react";

export interface MenuProps {
  icon: string;
  label: string;
  onClick?: any;
  isCollapse: boolean;
  isParent?: boolean;
  children?: ReactNode;
  isChild?: boolean;
}
