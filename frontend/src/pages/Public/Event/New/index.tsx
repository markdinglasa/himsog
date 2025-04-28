import { Roles, RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { useAuth } from "../../../../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";
import { cn, renderPath } from "../../../../utils";
import Form from "../../../../components/Surfaces/Forms";
import axios from "axios";
import { BASE_URL } from "../../../../shared";
const PublicEventNewPage: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // Extract the query part after the last slash
  const queryString = location.pathname.split("/").pop() || ""; // "id=49&token=eyJhbGci..."
  // Parse the parameters
  const params = new URLSearchParams(queryString);
  const RequestAccessId = params.get("id");
  const AccessToken = params.get("token");

  useEffect(() => {
    // VALIDATE TOKEN
    const validate = async () => {
      if (!AccessToken) {
        navigate(RouteChannel.R403);
        return;
      }
      try {
        const response = await axios.post(
          `${BASE_URL}/token-validator`,
          { token: AccessToken },
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${AccessToken}` },
          },
        );
        if (!response?.data?.data) navigate(RouteChannel.R403);
      } catch (error) {
        console.error("Token validation failed:", error);
        navigate(RouteChannel.R403);
      }
    };
    validate();
  }, [AccessToken]);

  useEffect(() => {
    if (auth?.user) {
      const path = renderPath(auth?.roles ?? Roles.default);
      navigate(path);
    }
  }, [auth]);

  return (
    <>
      <S.Container className={cn("flex justify-center mb-10", ClassName)}>
        <S.Content className="h-full flex flex-col justify-center items-center w-full md:w-11/12 mt-10 border rounded-md p-[1rem] bg-white w-full">
          <Form.Public.Event
            ClassName="w-full"
            IsDisplay={false}
            IsPublic={true}
            AccessToken={String(AccessToken)}
            RequestAccessId={Number(RequestAccessId)}
          />
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(PublicEventNewPage);
