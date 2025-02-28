import { SFC } from "../../../../types";
import * as S from "../../../../styles";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

interface IncrementCardProps {
  Icon: ReactNode;
  Percent: number;
  Amount: string;
  Text: string;
  IsNegative: boolean;
  PercentText: string;
}

export const IncrementCard: SFC<IncrementCardProps> = ({
  ClassName = "",
  Icon = null,
  Percent = "NA",
  IsNegative = false,
  Amount = "",
  Text = "",
  PercentText = "Since last month",
}) => {
  return (
    <S.Container
      className={twMerge(
        "w-full bg-white p-2 border rounded-md cursor-pointer hover:bg-slate-100 transition-all duration-300 ease-in-out",
        ClassName,
      )}
    >
      <S.Content className="top w-full flex flex-row h-[75px]">
        <S.Divider className=" w-11/12">
          <S.Span className="text-slate-500 text-[12px] font-semibold uppercase">
            {Text}
          </S.Span>
          <S.Span className="text text-xl text-primary font-semibold flex justify-start text-left">
            &#8369; {Amount}
          </S.Span>
        </S.Divider>
        <S.Divider className="icon flex w-1/12 overflow text-primary text-left items-center justify-end w-[100px] ">
          <S.Divider className="rounded-full flex items-center justify-center bg-primary">
            {Icon}
          </S.Divider>
        </S.Divider>
      </S.Content>
      <S.Content className="bot flex justify-start">
        <S.Span
          className={`title ${IsNegative ? "text-red-500" : "text-green-500"} text-sm font-bold`}
        >
          {IsNegative ? " - " : " + "}
          {Percent}%
        </S.Span>
        <S.Span className="title text-slate-500 text-sm ml-1">
          {PercentText}
        </S.Span>
      </S.Content>
    </S.Container>
  );
};
