import { DashboardCardProps, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { twMerge } from "tailwind-merge";
import MdiIcon from "@mdi/react";
import { mdiAbTesting } from "@mdi/js";

export const DashboardCard: SFC<DashboardCardProps> = ({
  ClassName = "",
  Icons = mdiAbTesting,
  Text = "NA",
  Title = "",
  OnClick = () => {},
}) => {
  return (
    <S.Container
      className={twMerge(
        "w-full rounded-sm bg-white p-2 cursor-pointer hover:bg-slate-100 transition-all duration-300 ease-in-out",
        ClassName,
      )}
      onClick={(e) => {
        if (OnClick) OnClick(e);
      }}
    >
      <S.Content className="top w-full flex flex-row">
        <S.Divider className="icon w-3/12 overflow text-primary">
          <MdiIcon path={Icons} size={"60px"} className="text-primary " />
        </S.Divider>
        {Text.length > 0 && (
          <S.Span className="text text-2xl text-primary font-semibold flex justify-end w-9/12 text-right">
            {Text}
          </S.Span>
        )}
      </S.Content>
      {Title.length > 0 && (
        <S.Content className="bot flex justify-end">
          <S.Span className="title text-slate-800 text-sm">{Title}</S.Span>
        </S.Content>
      )}
    </S.Container>
  );
};
