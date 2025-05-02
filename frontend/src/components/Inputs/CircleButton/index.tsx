import {
  ButtonColor,
  CircleButtonProps,
  SFC,
  TooltipPlacement,
} from "../../../types";
import { colors } from "../../../styles";
import * as S from "./Styles";

export const CircleButton: SFC<CircleButtonProps> = ({
  ClassName,
  IsNotification = false,
  OnClick,
  Icon,
  Type,
  Color,
  Title = "",
  Disabled = false,
  Placement = TooltipPlacement.bottom,
}) => {
  const renderColor = () => {
    switch (Color) {
      case ButtonColor.default:
        return { bg: "", hover: "" };
      case ButtonColor.white:
        return { bg: colors.white, hover: colors.palette.neutral["100"] };
      default:
        return {
          bg: colors.palette.neutral["050"],
          hover: colors.palette.neutral["075"],
        };
    }
  };
  return (
    <>
      <S.Container className={ClassName}>
        <S.Tooltip title={Disabled ? "" : Title} placement={Placement}>
          <S.IconButton
            onClick={OnClick}
            sx={{
              backgroundColor: renderColor().bg,
              "&:hover": { backgroundColor: renderColor().hover },
              transition: "all 0.3s ease-in-out",
              opacity: Disabled ? 0.6 : 1,
              border: Disabled ? 1 : "none",
            }}
            type={Type}
            disabled={Disabled}
          >
            <S.Badge
              color={IsNotification ? "error" : "default"}
              overlap="circular"
              variant={IsNotification ? "dot" : "standard"}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              {Icon}
            </S.Badge>
          </S.IconButton>
        </S.Tooltip>
      </S.Container>
    </>
  );
};
