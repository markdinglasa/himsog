import { Roles, SFC } from "../../../types";
import * as S from "../../../styles";
import { useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { renderPath } from "../../../utils";

const PublicEventPage: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.user) {
      const path = renderPath(auth?.roles ?? Roles.default);
      navigate(path);
    }
  }, [auth]);
  return (
    <>
      <S.Container className={ClassName}>event</S.Container>
    </>
  );
};

export default PublicEventPage;
