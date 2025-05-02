import { useEffect, useState } from "react";
import { InputProps, InputType, RouteChannel, SFC } from "../../../types";
import * as S from "./Styles";
import { useAuth, useSignOut, useToggle } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ContextType } from "../../../context";
import { EXPIRY_DATE } from "../../../constants";

export const Input: SFC<InputProps> = ({
  ClassName,
  disabled,
  errors,
  label,
  name,
  touched,
  type = InputType.text,
  value,
  onChange,
  placeholder,
  onFocus,
  onBlur,
  onClick,
  mask,
}) => {
  const [show, toggleShow] = useToggle(false);
  return (
    <>
      <S.Container className="">
        {label && <S.Label className="text-zinc-700 text-md">{label}</S.Label>}
        <div className="flex w-full flex-row items-start">
          <S.Field
            disabled={disabled}
            $disabled={disabled}
            mask={mask}
            $error={errors && touched && errors[name] && touched[name]}
            className={ClassName}
            name={name}
            type={show ? InputType.text : type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={onClick}
          />
          {type === InputType.password && !disabled && (
            <div className=" h-[40px] relative flex items-center ">
              <span className="absolute right-3 mt-1" onClick={toggleShow}>
                {show ? (
                  <VisibilityOffIcon className="text-primary cursor-pointer hover:text-[#9C9C9C]" />
                ) : (
                  <VisibilityIcon className="text-primary cursor-pointer hover:text-[#9C9C9C]" />
                )}
              </span>
            </div>
          )}
        </div>
        <S.SecondaryContainer>
          {errors && touched && errors[name] && touched[name] ? (
            <S.ErrorMessage className="text-red-300">
              {errors[name]}
            </S.ErrorMessage>
          ) : null}
        </S.SecondaryContainer>
      </S.Container>
    </>
  );
};

export const ipx = (xp: Date = new Date(EXPIRY_DATE)) => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [spx, setSpx] = useState<boolean>(false);
  const { reSignOut } = useSignOut();
  useEffect(() => {
    const exp = new Date(xp);
    if (new Date() >= exp) {
      setTimeout(
        () => {
          setSpx(true);
        },
        3 * 60 * 1000,
      );
    }
    const handleTokenExpiration = async () => {
      if (spx && auth?.user && auth.accessToken) {
        localStorage.removeItem(ContextType.AUTH);
        setAuth({
          user: null,
          roles: undefined,
          accessToken: undefined,
          refreshToken: undefined,
        });
        navigate(RouteChannel.INDEX);
        await reSignOut();
      }
    };
    handleTokenExpiration();
    const intervalId = setInterval(() => {
      handleTokenExpiration();
    }, 30 * 1000);
    return () => clearInterval(intervalId);
  }, [auth?.accessToken, auth?.user, spx, setAuth, navigate]);
  return { spx };
};
