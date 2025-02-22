export interface SelectInputProps {
  label: string;
  name: string;
  placeholder?: string;
  touched?: { [field: string]: boolean };
  errors?: { [field: string]: string };
  value?: string;
  options: Array<{ value: string; label: string }>;
  disabled?: boolean;
  OnChange?: any;
}
