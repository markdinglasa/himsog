import { Roles, RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles";
import { cn, renderPath } from "../../../utils";
import { CustomButton } from "../../../components";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { useEffect } from "react";
export const PublicHomePage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
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
        <S.Divider className="flex flex-col gap-5">
          <S.Divider>
            <h1 className="font-black text-slate-900">
              Personalize your food.
            </h1>
            <h1 className="font-black text-primary">
              Eat Smart. Live Healthy.
            </h1>
          </S.Divider>
          <S.Divider className="w-full text-center flex items-center justify-center">
            <p className="text-sm w-full md:w-8/12 italic">
              Connect with health professionals and get meal plans personalized
              to your needs.
            </p>
          </S.Divider>
          <S.Divider className="flex items-center justify-center">
            <CustomButton
              text={"Get started"}
              morph={false}
              rightIcon={<EastIcon />}
              onClick={() => navigate(RouteChannel.SIGN_IN)}
            />
          </S.Divider>
        </S.Divider>
      </S.Container>
    </>
  );
};
