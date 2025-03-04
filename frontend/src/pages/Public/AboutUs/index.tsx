import { Roles, SFC } from "../../../types";
import * as S from "../../../styles";
import { cn, renderPath } from "../../../utils";
import { useAuth } from "../../../hooks";
import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicAboutUsPage: SFC = ({ ClassName }) => {
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

export default memo(PublicAboutUsPage);
