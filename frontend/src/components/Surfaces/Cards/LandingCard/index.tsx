import { SFC } from "../../../../types";
import * as S from "../../../../styles";
import { cn } from "../../../../utils";
import { memo } from "react";

export interface LandingCardProps {
  Title: string;
  Description: string;
  LeftImage?: string | null;
  LeftImageStyle?: string;
  RightImage?: string | null;
  RightImageStyle?: string;
}

const LandingCard: SFC<LandingCardProps> = ({
  ClassName,
  Title,
  Description,
  LeftImage,
  RightImage,
  LeftImageStyle,
  RightImageStyle,
}) => {
  return (
    <S.Container className={cn("w-full", ClassName)}>
      <S.Content className="w-full flex justify-between items-center md:flex-row flex-col">
        {LeftImage && (
          <S.Divider
            className={`flex items-center justify-center ${LeftImageStyle ?? ""}`}
          >
            <S.Image
              src={LeftImage ?? ""}
              alt="landing-image"
              className="w-[300px]"
            />
          </S.Divider>
        )}
        <S.Divider className="flex flex-col w-7/12">
          <S.Divider className="flex mb-5 text-xl font-medium">
            {Title}
          </S.Divider>
          <S.Divider className="flex text-sm text-slate-600 text-justify">
            {Description}
          </S.Divider>
        </S.Divider>
        {RightImage && (
          <S.Divider
            className={`flex items-center justify-center ${RightImageStyle ?? ""}`}
          >
            <S.Image
              src={RightImage ?? ""}
              alt="landing-image"
              className="w-[300px]"
            />
          </S.Divider>
        )}
      </S.Content>
    </S.Container>
  );
};

export default memo(LandingCard);
