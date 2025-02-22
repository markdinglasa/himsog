import { twMerge } from "tailwind-merge";
import { SelectInputProps, SFC } from "../../../types";
import * as S from "./Styles";
import { colors } from "../../../styles";

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
    border: disabled ? `1px solid ${colors.palette.neutral["100"]}` : "",
    backgroundColor: disabled ? `white` : "",
  };

  return (
    <>
      <S.Container className={ClassName}>
        <S.Label htmlFor={name}>{label}</S.Label>
        <S.Content>
          <S.Field name={name} className={twMerge("border", ClassName)}>
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
