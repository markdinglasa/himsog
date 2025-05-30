import { ButtonType, SFC } from "../../../types";
import { ReactNode } from "react";
import { Button } from "@mui/material";
import { colors } from "../../../styles";
import { twMerge } from "tailwind-merge";
import { CircleButton } from "../CircleButton";

export interface ButtonProps {
  id?: string;
  color?: string;
  dirty?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  text?: string;
  type?: ButtonType;
  morph?: boolean;
  child?: ReactNode;
}

export const CustomButton: SFC<ButtonProps> = ({
  ClassName,
  id,
  color = "primary",
  dirty = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  text,
  type = ButtonType.button, // Default button type
  morph = true,
  child,
}) => {
  const CustomColor = () => {
    if (color === "primary")
      return {
        bg: colors.primary,
        hover: colors.primaryHover,
        text: "text-white",
      };
    if (color === "green")
      return {
        bg: colors.palette.green["300"],
        hover: colors.palette.green["400"],
        text: "text-white",
      };
    if (color === "red")
      return {
        bg: colors.palette.red["300"],
        hover: colors.palette.red["400"],
        text: "text-white",
      };
    if (color === "default")
      return {
        bg: "none",
        hover: colors.palette.neutral["100"],
        text: "text-primary",
      };
    if (color === "white")
      return {
        bg: colors.white,
        hover: colors.palette.neutral["100"],
        text: "text-primary",
      };
    return {
      bg: "none",
      hover: colors.palette.neutral["100"],
      text: "text-primary",
    };
  };

  return (
    <>
      <div className={morph ? "md:block hidden" : ""}>
        <Button
          id={id}
          title={text}
          startIcon={leftIcon}
          endIcon={rightIcon}
          type={type}
          onClick={onClick}
          variant="contained"
          disabled={disabled || dirty}
          className={twMerge(
            " flex items-center justify-center h-10 shadow-none " + ClassName,
          )}
          sx={{
            minWidth: "120px",
            minHeight: "40px",

            border: color === "default" ? "1px solid #e1e1e1" : "none",
            background: CustomColor().bg,
            "&:hover": { background: CustomColor().hover, boxShadow: 0 },
            opacity: disabled || dirty ? 0.6 : 1,
            cursor: disabled || dirty ? "not-allowed" : "pointer",
            textTransform: "none",
            borderRadius: "4px",
            transition: "ease-in-out 0.3s",
            boxShadow: 0,
          }}
        >
          {child}
          {text && (
            <span className={`font-sans ${CustomColor().text}`}>{text}</span>
          )}
        </Button>
      </div>
      {morph && (
        <div className="md:hidden block">
          <CircleButton
            OnClick={onClick}
            IsNotification={false}
            Icon={leftIcon ?? rightIcon}
            Type={type}
            Title={text}
            ClassName={disabled ? "opacity-30" : "block"}
            Disabled={disabled}
          />
        </div>
      )}
    </>
  );
};
