export interface InputProps {
  ClassName?: string;
  errors?: { [field: string]: string };
  label?: string;
  name: string;
  touched?: { [field: string]: boolean };
  type?: InputType;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  onFocus?: any;
  onBlur?: any;
  onClick?: any;
  mask?: string;
  id?: string;
  key?: any;
  ref?: any;
  onKeyDown?: any;
  inputClassName?: string;
  isRequired?: boolean;
}

export enum InputType {
  date = "date",
  text = "text",
  password = "password",
  number = "number",
  email = "email",
  file = "file",
  hidden = "hidden",
}
