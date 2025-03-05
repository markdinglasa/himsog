import { SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { memo } from "react";

export const NutritionisstMessengerPage: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={ClassName}>Messenger</S.Container>
    </>
  );
};

export default memo(NutritionisstMessengerPage);
