import { SelectInputProps, SFC } from "../../../types";
import * as S from "./Styles";
import { cn } from "../../../utils";

export const SelectInput: SFC<SelectInputProps> = ({
  ClassName,
  errors,
  label,
  name,
  placeholder = "Select an option",
  touched,
  options,
  value,
  disabled = false,
  //OnChange,
}) => {
  const style = {
    border: disabled ? `1px solid #C4C4C4` : "1px solid #C4C4C4",
    backgroundColor: disabled ? `white` : "",
    "&:hover": {
      border: disabled ? `1px solid #202020` : "1px solid #202020",
    },
  };

  return (
    <>
      <S.Container className={cn("hover:border-red", ClassName)}>
        <S.Label htmlFor={name} className="ml-3 text-zinc-700">
          {label}
        </S.Label>
        <S.Content>
          <S.Field name={name}>
            {({ field, form }: any) => (
              <>
                <S.Field
                  disabled={disabled}
                  style={style}
                  {...field}
                  as="select"
                  value={value ?? field.value}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    form.setFieldValue(name, e.target.value);
                    //OnChange(e.target.value);
                  }}
                  $error={errors && touched && errors[name] && touched[name]}
                >
                  <S.Option value="" disabled>
                    {placeholder}
                  </S.Option>
                  {options.map((option) => (
                    <S.Option key={option.value} value={option.value}>
                      {option.label}
                    </S.Option>
                  ))}
                </S.Field>
              </>
            )}
          </S.Field>
        </S.Content>
        <S.SecondaryContainer>
          {errors && touched && errors[name] && touched[name] ? (
            <S.ErrorMessage>{errors[name]}</S.ErrorMessage>
          ) : null}
        </S.SecondaryContainer>
      </S.Container>
    </>
  );
};
