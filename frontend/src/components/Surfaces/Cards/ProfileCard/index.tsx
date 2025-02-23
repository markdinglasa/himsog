import { SFC } from "../../../../types";
import * as S from "../../../../styles";
import { cn } from "../../../../utils";
import DefaultImage from "../../../../asset/images/default-image.jpg";

interface ProfileCardProps {
  Name: string;
  RoleName: string;
  ProfilePicture?: string;
}

export const ProfileCard: SFC<ProfileCardProps> = ({
  ClassName,
  Name,
  RoleName,
  ProfilePicture,
}) => {
  return (
    <>
      <S.Container className={cn("w-full bg-white p-2 rounded-sm", ClassName)}>
        <S.Content className="w-full flex items-center justify-start gap-2 flex-row">
          <S.Content
            className={`relative inline-block overflow-hidden w-[100px] h-[80px] border-primary`}
          >
            <S.Image
              alt="Default Image"
              src={ProfilePicture ?? DefaultImage}
              className="object-cover  w-[100px] h-[80px]"
            />
          </S.Content>
          <S.Divider className="w-full flex flex-col h-[80px] items-start justify-center">
            <S.Span className="text-primary text-xl font-bold uppercase">
              {Name}
            </S.Span>
            <S.Span className="text-zinc-800 uppercase text-sm">
              {RoleName}
            </S.Span>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
//https://demos.creative-tim.com/nextjs-material-tailwind-dashboard-pro/pages/account/settings#Basic%20Info
