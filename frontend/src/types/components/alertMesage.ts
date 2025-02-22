export enum AlertType {
  success = "success",
  error = "error",
  warning = "warning",
  info = "info",
}

export interface AlertMessageProps {
  Type: AlertType;
  Message: string;
}
