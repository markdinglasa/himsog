import { SFC } from "../../../types";
import * as S from "./Styles";
import DefaultImage from "../../../asset/images/default-image.jpg";
export const Splash: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={ClassName}>
        <S.Content>
          <S.Image src={DefaultImage} />
        </S.Content>
      </S.Container>
    </>
  );
};
