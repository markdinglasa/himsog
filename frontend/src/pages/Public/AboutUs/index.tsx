import { SFC } from "../../../types";
import * as S from "../../../styles";
import { cn } from "../../../utils";

export const PublicAboutUsPage: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container
        className={cn(
          "h-[calc(100vh-200px)] flex items-center justify-center",
          ClassName,
        )}
      >
        AboutUs
      </S.Container>
    </>
  );
};
