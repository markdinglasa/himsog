import { useMemo } from "react";
import { AutoCompleteProps, SFC } from "../../../types";
import * as S from "./Styles";

export const AutoComplete: SFC<AutoCompleteProps> = ({
  ClassName,
  Options,
  Values,
  Name,
  IsEdit = false,
  Placeholder = "",
  OnChange,
  Label,
  Errors,
  Touched,
  OptionName = "Name",
}) => {
  const selectedValue = useMemo(
    () => Options.find((option) => option.Id === Values) || null,
    [Options, Values],
  );

  return (
    <>
      <S.Container className={ClassName}>
        {Label && <S.Label>{Label}</S.Label>}
        <S.Content>
          <S.AutoComplete
            options={Options}
            getOptionLabel={(option: any) => option[OptionName]}
            value={selectedValue}
            onChange={OnChange}
            disabled={IsEdit}
            isOptionEqualToValue={(option: any, value: any) =>
              option.Id === value.Id
            }
            renderInput={(params) => (
              <S.TextField {...params} placeholder={Placeholder} />
            )}
            autoSelect
            $isEdit={IsEdit}
          />
        </S.Content>
        <S.ErrorCon>
          {Errors && Touched && Errors[Name] && Touched[Name] ? (
            <S.ErrorMessage>{Errors[Name]}</S.ErrorMessage>
          ) : null}
        </S.ErrorCon>
      </S.Container>
    </>
  );
};
