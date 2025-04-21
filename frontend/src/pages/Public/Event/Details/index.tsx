import { Roles, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { useAuth } from "../../../../hooks";
import { useNavigate, useParams } from "react-router-dom";
import { memo, Suspense, useEffect } from "react";
import { cn, renderPath } from "../../../../utils";
import EventDetails from "../../../../components/DataDisplay/EventDetails";
import API from "../../../../hooks/api";
import { Skeleton } from "@mui/material";

const PublicEventDetailsPage: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.user) {
      const path = renderPath(auth?.roles ?? Roles.default);
      navigate(path);
    }
  }, [auth]);

  const { Id } = useParams<{ Id: string }>();
  const { data, isLoading } = API.Setup.Event.Get(Number(Id));
  return (
    <>
      <S.Container className={cn("flex justify-center mb-10", ClassName)}>
        <Suspense fallback={<Skeleton />}>
          <EventDetails Data={data} Loading={isLoading} />
        </Suspense>
      </S.Container>
    </>
  );
};

export default memo(PublicEventDetailsPage);
