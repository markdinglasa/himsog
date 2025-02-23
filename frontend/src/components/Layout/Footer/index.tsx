import { SFC } from "../../../types";
import { cn } from "../../../utils";
import * as S from "./Styles";

export const PageFooter: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container
        className={cn("flex justify-end items-center rounded-sm", ClassName)}
      >
        <span>
          &copy; {new Date().getFullYear()} Himsog. All rights reserved.
        </span>
      </S.Container>
    </>
  );
};
