import { APP_VERSION } from "../../../../constants";
import { SFC } from "../../../../types";
import { cn } from "../../../../utils";
import * as S from "./Styles";

export const CardFooter: SFC = ({ ClassName }) => {
  return (
    <S.Container className={cn("w-full", ClassName)}>
      <S.LoginConFooter className="">
        <S.Span className="text-sm">
          {new Date().getFullYear()} &copy; Cebu Innosoft Solution Services Inc.
        </S.Span>
        <S.Span className="text-sm"> Innosoft POS v{APP_VERSION}</S.Span>
      </S.LoginConFooter>
    </S.Container>
  );
};
