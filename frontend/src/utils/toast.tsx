import { ReactNode } from "react";
import { toast } from "react-toastify";
import { Toast } from "../components";
import { ToastType } from "../types";
import { colors } from "../styles";

export const displayToast = (
  message: ReactNode,
  type: ToastType,
  icon?: string,
): void => {
  toast(
    <Toast ClassName={""} type={type} icon={icon}>
      <span className="text-slate-700">{message}</span>
    </Toast>,
    {
      style: {
        background: colors.palette.neutral["100"],
        padding: "0px",
      },
      closeButton: false,
    },
  );
};
