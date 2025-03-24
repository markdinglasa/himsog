import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { InputProps, InputType, SFC } from "../../../types";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useToggle } from "react-use";
import { cn } from "../../../utils";

export const CustomInput: SFC<InputProps> = ({
  ClassName,
  disabled,
  errors,
  label,
  name,
  touched,
  type = InputType.text,
  value,
  onChange,
  placeholder,
  onFocus,
  onBlur,
  onClick,
  isRequired,
  leftIcon,
}) => {
  const [isPassword, togglePassword] = useToggle(false);

  return (
    <div className="py-2 ">
      <FormControl
        sx={{ width: "100%", padding: 0 }}
        variant="outlined"
        className={`flex items-start justify-center ${errors && errors[name] ? "mb-2" : ""}`}
      >
        <InputLabel
          shrink
          htmlFor={`outlined-adornment-${name}`}
          className="-mt-2 font-(family-name:Montserrat)"
          color={errors && errors[name] ? "error" : "success"}
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </InputLabel>

        <OutlinedInput
          className={cn("", ClassName)}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          //defaultValue={value}
          value={value}
          sx={{
            width: "100%",
          }}
          size="small"
          id={`outlined-adornment-${name}`}
          type={isPassword ? InputType.text : type}
          color={errors && errors[name] ? "error" : "success"}
          startAdornment={leftIcon && leftIcon}
          endAdornment={
            type === InputType.password && (
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    isPassword ? "hide the password" : "display the password"
                  }
                  onClick={togglePassword}
                  edge="end"
                >
                  {isPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
          label={label}
        />
        {errors && errors[name] && touched && touched[name] ? (
          <FormHelperText id={`component-error-text-${name}`}>
            <span className="text-red-400">{errors[name]}</span>
          </FormHelperText>
        ) : null}
      </FormControl>
    </div>
  );
};
