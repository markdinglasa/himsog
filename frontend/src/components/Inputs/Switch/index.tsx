import { FormControlLabel, Switch } from "@mui/material";
import { SFC } from "../../../types";
import * as S from "../../../styles";
import { cn } from "../../../utils";
import { colors } from "../../../styles";

export interface SwitchButtonProps {
  OnChange?: any;
  Values?: any;
  Name: string;
  Label: string;
  Disabled?: boolean;
  Touched?: { [field: string]: boolean };
  Errors?: { [field: string]: string };
}

export const SwitchButton: SFC<SwitchButtonProps> = ({
  ClassName,
  OnChange,
  Values,
  Name,
  Label = "NA",
  Disabled = false,
  Errors,
  Touched,
}) => {
  return (
    <S.Container className={cn("", ClassName)}>
      <FormControlLabel
        control={
          <Switch
            disabled={Disabled}
            name={Name}
            onChange={OnChange}
            checked={Values}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: colors.primary,
              },
            }}
          />
        }
        label={Label}
        sx={{
          "& .MuiFormControlLabel-label": {
            fontSize: "12px",
            color: colors.palette.neutral["700"],
            alignItems: "center",
            display: "flex",
          },
        }}
      />
      <S.Divider className="w-full p-2">
        {" "}
        {Errors && Touched && Touched[Name] && Touched[Name] ? (
          <S.Span className="text-red-300">{Errors[Name]}</S.Span>
        ) : null}
      </S.Divider>
    </S.Container>
  );
};
