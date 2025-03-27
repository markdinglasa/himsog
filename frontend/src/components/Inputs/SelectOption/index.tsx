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
      <S.Container
        className={cn(
          "h-[40px] w-full border rounded-md border-[#C4C4C4]",
          ClassName,
        )}
      >
        {label && (
          <S.Label htmlFor={name} className="text-sm text-primary text-red-300">
            {label}
          </S.Label>
        )}
        <S.Select
          className="p-2 px-3 rounded-md w-full outline-none text-zinc-800 border-none flex items-start justify-center"
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
            <S.Option
              key={option.value}
              value={option.value}
              className="border-red"
            >
              {option.label}
            </S.Option>
          ))}
        </S.Select>
      </S.Container>
    </>
  );
};
