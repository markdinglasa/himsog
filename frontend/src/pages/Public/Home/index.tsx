import { Roles, RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles";
import { cn, renderPath } from "../../../utils";
import { CustomButton } from "../../../components";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { memo, useEffect } from "react";
import Card from "../../../components/Surfaces/Cards";
import Img1 from "../../../asset/svg/img1.svg";
import Img2 from "../../../asset/svg/img2.svg";
import Img3 from "../../../asset/svg/img3.svg";
import Img4 from "../../../asset/svg/img4.svg";
import Logo from "../../../asset/svg/logo2.svg";
const PublicHomePage: SFC = ({ ClassName }) => {
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
        className={cn("h-screen flex items-center justify-center", ClassName)}
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
      <S.Container className="flex flex-col items-center justify-center w-full mb-10">
        <S.Content className="w-full md:w-11/12 flex-col flex items-center justify-center">
          <S.Divider className="w-full flex flex-col items-center justify-center mb-10">
            <S.Divider>
              <S.Image src={Logo} />
            </S.Divider>
            <S.Divider className="flex flex-row text-xl font-medium">
              <S.Span>Why choose</S.Span>
              <S.Span className="ml-2 text-primary">Himsog?</S.Span>
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-11/12 flex flex-col items-center justify-center">
            <Card.Landing
              Title="Personalized Meal Planning"
              Description="Users can browse, request, and access custom meal plans tailored to their health conditions. Health professionals can create both pre-set and customized meal plans, ensuring evidence-based nutrition guidance."
              RightImage={Img1}
            />

            <Card.Landing
              Title="Appointment Scheduling with Experts"
              Description="Book and manage appointments with qualified health professionals directly on the platform. Track your appointment history, get expert advice, and improve your health with verified professionals."
              LeftImage={Img2}
            />
            <Card.Landing
              Title="Updated with Verified Events & Articles"
              Description="Connect with health professionals and government health establishments through expert-led events and articles. Whether it's a free community health drive or a specialized paid session, our platform ensures that only legitimate and impactful events and articles are published."
              RightImage={Img3}
            />

            <Card.Landing
              Title="Direct Communication with Health Professionals"
              Description="Easily connect with qualified health professionals for expert guidance and personalized health recommendations. Whether you need dietary advice, medical consultations, or clarification on a health-related topic, our platform ensures secure and seamless communication between users and professionals."
              LeftImage={Img4}
            />
          </S.Divider>
        </S.Content>
        <S.Content className="w-full md:w-11/12 flex-col flex items-center justify-center mt-20">
          <S.Divider className="w-full flex flex-col items-start justify-start">
            <S.Divider>
              <S.Span className="font-semibold text-xl">
                The perfect companion for your healthy meal.
              </S.Span>
            </S.Divider>
            <S.Divider className="mb-5">
              <S.Span className="text-primary font-medium text-lg">
                Sign up for free, today.
              </S.Span>
            </S.Divider>
            <S.Divider>
              <CustomButton
                text={"Get started"}
                onClick={() => navigate(RouteChannel.SIGN_IN)}
              />
            </S.Divider>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(PublicHomePage);
