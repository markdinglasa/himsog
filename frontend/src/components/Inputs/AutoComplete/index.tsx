import { useMemo } from "react";
import { AutoCompleteProps, SFC } from "../../../types";
import * as S from "./Styles";
import { cn } from "../../../utils";
import { FormHelperText } from "@mui/material";
import Icon from "../../../constants/icon";
import { useToggle } from "react-use";
import { CustomModal } from "../../../modals";

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
  IsTooltip = false,
  TooltipMessage = "",
  IsRequired = false,
}) => {
  const selectedValue = useMemo(
    () => Options.find((option) => option.Id === Values) || null,
    [Options, Values],
  );
  const [isHelp, toggleHelp] = useToggle(false);
  return (
    <>
      <S.Container className={cn("mb-0 ", ClassName)}>
        <div className="flex flex-row w-full items-center">
          {Label && (
            <S.Label className="text-[#666666] ml-3">
              {Label}
              {IsRequired && <span className="text-red-500">*</span>}
            </S.Label>
          )}
          {IsTooltip && (
            <Icon.Help
              className="ml-1 p-[1.5px] text-primary cursor-pointer "
              fontSize="small"
              onClick={toggleHelp}
            />
          )}
        </div>
        <S.Content>
          <S.AutoComplete
            className={`border border-[#C4C4C4] rounded-[4px] ${IsEdit ? "" : "hover:border-[#202020]"}`}
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
            <FormHelperText
              id={`component-error-text-${Name}`}
              sx={{ margin: "-4px 0 4px" }}
            >
              <span className="text-red-400 ml-3 ">{Errors[Name]}</span>
            </FormHelperText>
          ) : null}
        </S.Content>
      </S.Container>
      <CustomModal
        close={toggleHelp}
        title={Label ?? ""}
        open={isHelp}
        ClassName="md:w-[30rem] w-[80vw]"
      >
        <div className="py-5">{TooltipMessage && <p>{TooltipMessage}</p>}</div>
      </CustomModal>
    </>
  );
};
