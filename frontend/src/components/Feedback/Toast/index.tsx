import { ReactNode, useCallback } from "react";
import { SFC, ToastType } from "../../../types";
import * as S from "./Styles";
import { mdiAlertCircleOutline, mdiCheckCircle, mdiWifi } from "@mdi/js";

export interface ToastProps {
  children: ReactNode;
  type?: ToastType;
  icon?: string;
}

export const Toast: SFC<ToastProps> = ({
  children,
  ClassName,
  type = ToastType.error,
  icon = null,
}) => {
  const renderIcon = useCallback((): ReactNode => {
    switch (type) {
      case ToastType.network:
        return (
          <S.Icon
            type={type}
            path={mdiWifi}
            aria-label="Network"
            className="text-blue-300"
          />
        );
      case ToastType.success:
        return (
          <S.Icon
            type={type}
            path={mdiCheckCircle}
            aria-label="Success"
            className="text-green-300"
          />
        );
      default:
        return (
          <S.Icon type={type} path={mdiAlertCircleOutline} aria-label="Error" />
        );
    }
  }, [type]);

  return (
    <S.Container className={ClassName}>
      {icon ? <S.Icon type={type} path={icon} /> : renderIcon()}
      <S.Text>{children}</S.Text>
    </S.Container>
  );
};
