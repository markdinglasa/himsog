import * as S from "./Styles";
import { SelectInputProps, SFC } from "../../../types";
import { cn } from "../../../utils";

export const SelectOption: SFC<SelectInputProps> = ({
  ClassName,
  label,
  name,
  placeholder = "Select an option",
  options,
  value,
  disabled = false,
  OnChange,
}) => {
  return (
    <>
      <S.Container className={cn("h-[40px] border rounded-md", ClassName)}>
        {label && (
          <S.Label htmlFor={name} className="text-sm text-primary text-red-300">
            {label}
          </S.Label>
        )}
        <S.Select
          className="p-2 rounded-md w-full bg-slate-100 outline-none text-zinc-800 border-none"
          disabled={disabled}
          $disabled={disabled}
          as="select"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            OnChange(e.target.value);
          }}
        >
          <S.Option value="">{placeholder}</S.Option>
          {options.map((option) => (
            <S.Option key={option.value} value={option.value}>
              {option.label}
            </S.Option>
          ))}
        </S.Select>
      </S.Container>
    </>
  );
};
