import { forwardRef } from "react";
import { InputProps, InputType } from "../../../types";
import { cn } from "../../../utils";
import * as S from "./Styles";

export const InputOption = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      ClassName,
      disabled = false,
      label,
      name,
      type = InputType.text,
      value,
      onChange,
      placeholder,
      id,
      onKeyDown,
      inputClassName,
    },
    ref,
  ) => {
    return (
      <S.Container className={ClassName}>
        {label && <label htmlFor={name}>{label}</label>}
        <S.Input
          ref={ref}
          id={id}
          name={name}
          className={cn(
            "bg-slate-100 rounded-md border min-h-[40px]",
            inputClassName,
          )}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          $isDisabled={disabled}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
        />
      </S.Container>
    );
  },
);
