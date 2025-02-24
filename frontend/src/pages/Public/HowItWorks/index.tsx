import { SFC } from "../../../types";
import * as S from "../../../styles";
import { cn } from "../../../utils";
import Logo from "../../../asset/svg/logo2.svg";
import Card from "../../../components/Surfaces/Cards";
import TransaparentImg from "../../../asset/images/transaparent.png";

const PublicHowItWorksyPage: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container
        className={cn(
          "w-full  flex flex-col items-center justify-center",
          ClassName,
        )}
      >
        <S.Content className="w-full md:w-11/12 flex flex-col items-center justify-center">
          <S.Divider className="w-full flex flex-col items-center justify-center mt-10">
            <S.Divider>
              <S.Divider>
                <S.Image src={Logo} />
              </S.Divider>
            </S.Divider>
            <S.Divider className="flex flex-row text-xl font-medium mb-2">
              <S.Span>How</S.Span>
              <S.Span className="text-primary ml-2">Himsog</S.Span>
              <S.Span className="ml-2">works</S.Span>
            </S.Divider>
            <S.Divider className="flex flex-row text-sm">
              <S.Span className="text-slate-600">
                A simple way to get started in 5 easy steps
              </S.Span>
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full md:w-10/12 flex flex-col items-center justify-center mt-10">
            <Card.Landing
              ClassName="md:mb-0 mb-3"
              Title="1. Create your Himsog account"
              Description="Sign up as a Health Advocate, Health Professional, or a representative of a Government Health Establishment (GHE) to join our community. Creating your account is quick and secure, ensuring you get the right access based on your role."
              LeftImage={TransaparentImg}
              LeftImageStyle="md:block hidden"
            />
            <Card.Landing
              ClassName="md:mb-0 mb-3"
              Title="2. Complete your health profile"
              Description="Before you can fully enjoy Himsog, you need to provide essential health and personal information. This allows us to tailor meal plans and recommendations specifically for you."
              RightImage={TransaparentImg}
              RightImageStyle="md:block hidden"
            />
            <Card.Landing
              ClassName="md:mb-0 mb-3"
              Title="3. Browse or Request a Meal Plan"
              Description="Explore a variety of expert-approved meal plans designed for different health goals and dietary needs. If you need a customized meal plan, you can send a request to a verified health professional and receive personalized recommendations."
              LeftImage={TransaparentImg}
              LeftImageStyle="md:block hidden"
            />
            <Card.Landing
              ClassName="md:mb-0 mb-3"
              Title="4. Discover Health Events & Articles"
              Description="Stay updated with the latest health-related events and insightful articles posted by Government Health Establishments and Health Professionals. You can browse upcoming seminars, workshops, and community events that promote a healthier lifestyle."
              RightImage={TransaparentImg}
              RightImageStyle="md:block hidden"
            />
            <Card.Landing
              ClassName="md:mb-0 mb-3"
              Title="5. Enjoy a healthier Lifestyle with Himsog"
              Description="With Himsog, you get easy access to professional health guidance, meal plans, and valuable health resources. Our platform ensures that you receive trusted and personalized recommendations to help you achieve your wellness goals."
              LeftImage={TransaparentImg}
              LeftImageStyle="md:block hidden"
            />
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};

export default PublicHowItWorksyPage;
