import { useMemo } from "react";
import { AutoCompleteProps, SFC } from "../../../types";
import * as S from "./Styles";
import { cn } from "../../../utils";
import { FormHelperText } from "@mui/material";

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
  OnBlur,
}) => {
  const selectedValue = useMemo(
    () => Options.find((option) => option.Id === Values) || null,
    [Options, Values],
  );

  return (
    <>
      <S.Container className={cn("mb-0", ClassName)}>
        {Label && (
          <S.Label className="text-[#666666] font-medium ml-3">{Label}</S.Label>
        )}
        <S.Content>
          <S.AutoComplete
            className={`border border-[#C4C4C4] ${IsEdit ? "" : "hover:border-[#202020]"}`}
            options={Options}
            getOptionLabel={(option: any) => option[OptionName]}
            value={selectedValue}
            onChange={OnChange}
            disabled={IsEdit}
            isOptionEqualToValue={(option: any, value: any) =>
              option.Id === value.Id
            }
            onBlur={OnBlur}
            renderInput={(params: any) => (
              <S.TextField {...params} placeholder={Placeholder} />
            )}
          />
          {Errors && Touched && Errors[Name] && Touched[Name] ? (
            <FormHelperText id={`component-error-text-${Name}`}>
              <span className="text-red-400 ml-3 ">{Errors[Name]}</span>
            </FormHelperText>
          ) : null}
        </S.Content>
      </S.Container>
    </>
  );
};
