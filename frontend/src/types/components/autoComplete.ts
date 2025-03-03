export interface AutoCompleteProps {
  Options: any[];
  Values?: any;
  Name: string;
  IsEdit?: boolean;
  Placeholder?: string;
  OnChange?: any;
  Label?: string;
  Touched: { [field: string]: boolean };
  Errors?: { [field: string]: string };
  Disabled?: boolean;
  OptionName?: string;
  OnBlur?: any;
  IsTooltip?: boolean;
  TooltipMessage?: string;
}
