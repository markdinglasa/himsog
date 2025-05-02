import { SFC } from "../../../types";
import * as S from "./Styles";
import Logo from "../../../asset/svg/logo.svg";
import { cn } from "../../../utils";
export const Splash: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container
        className={cn(
          "w-screen h-screen bg-white items-center justify-center flex",
          ClassName,
        )}
      >
        <S.Content>
          <S.Image src={Logo} />
        </S.Content>
      </S.Container>
    </>
  );
};
