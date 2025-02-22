import { SFC } from "../../../types";
import * as S from "./Styles";
import CircularProgress from "@mui/material/CircularProgress";
import { twMerge } from "tailwind-merge";

export const Skeleton: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={twMerge("", ClassName)}>
        <S.Content>
          <CircularProgress />
        </S.Content>
      </S.Container>
    </>
  );
};
