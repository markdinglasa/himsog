import { ButtonColor, Roles, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import Icon from "../../../constants/icon";
import { CustomButton } from "../../Inputs";
import { cn, renderPath } from "../../../utils";
import { useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";

interface StatisSubscriptionProps {
  onClick: () => void;
}
export const StaticSubscription: SFC<StatisSubscriptionProps> = ({
  ClassName,
}) => {
  const { auth } = useAuth();
  const path = renderPath(auth?.roles as Roles);
  const navigate = useNavigate();
  return (
    <>
      <S.Divider
        className={cn(
          "w-full flex md:flex-row flex-col items-center justify-center mt-10 gap-10 ",
          ClassName,
        )}
      >
        <S.Divider className="w-full md:w-5/12 border h-[400px] rounded-md p-5 border-slate-300 overflow-auto">
          <S.Divider className=" h-16 py-3 flex items-end justify-start border-b border-slate-300">
            <S.Span className="text-lg font-medium  w-full">Free Plan</S.Span>
          </S.Divider>
          <S.Divider className="w-full flex items-center py-3 mt-5">
            <Icon.Check className="" />
            <S.Span className="text-md ml-2 w-full">Browse meal plan</S.Span>
          </S.Divider>
          <S.Divider className="w-full flex items-center py-3">
            <Icon.Check className="" />
            <S.Span className="text-md ml-2 w-full">
              Limited meal plan requests
            </S.Span>
          </S.Divider>
          <S.Divider className="w-full flex items-center py-3">
            <Icon.Check className="" />
            <S.Span className="text-md ml-2 w-full">
              Access to public health articles
            </S.Span>
          </S.Divider>
          <S.Divider className="w-full flex items-center py-3 mb-5">
            <Icon.Check className="" />
            <S.Span className="text-md ml-2 w-full">
              Access to upcoming health events
            </S.Span>
          </S.Divider>
          <S.Divider className=" h-16 py-3 flex items-center justify-between border-t border-slate-300">
            <S.Divider>
              <S.Span className="text-lg font-medium  w-full">₱ 0 /</S.Span>
              <S.Span className="text-md">month</S.Span>
            </S.Divider>
            <S.Divider>
              <CustomButton
                text="Get Started"
                onClick={() => navigate(`${path}/subscription/free`)}
                morph={false}
              />
            </S.Divider>
          </S.Divider>
        </S.Divider>
        <S.Divider className="w-full md:w-7/12 border h-full md:h-[400px] rounded-md p-5 bg-primary text-white overflow-auto">
          <S.Divider className=" h-16 py-3 flex items-end justify-start border-b border-slate-300">
            <S.Span className="text-lg font-medium  w-full">
              Premium Plan
            </S.Span>
          </S.Divider>
          <S.Divider className="w-full flex items-center py-3 mt-5">
            <Icon.Check className="" />
            <S.Span className="text-md ml-2 w-full">
              Access & Browse meal plan
            </S.Span>
          </S.Divider>
          <S.Divider className="w-full flex items-center py-3">
            <Icon.Check className="" />
            <S.Span className="text-md ml-2 w-full">
              Unlimited customize meal plan requests
            </S.Span>
          </S.Divider>
          <S.Divider className="w-full flex items-center py-3">
            <Icon.Check className="" />
            <S.Span className="text-md ml-2 w-full">
              Early access to upcoming events & articles
            </S.Span>
          </S.Divider>
          <S.Divider className="w-full flex items-center py-3 mb-5">
            <Icon.Check className="" />
            <S.Span className="text-md ml-2 w-full">
              Direct consultation to Professional Health cares
            </S.Span>
          </S.Divider>

          <S.Divider className=" h-full md:h-16 py-3 flex items-center justify-between border-t border-slate-300 ">
            <S.Divider>
              <S.Span className="text-lg font-medium  w-full">₱ 599 /</S.Span>
              <S.Span className="text-md">month</S.Span>
            </S.Divider>
            <S.Divider>
              <CustomButton
                color={ButtonColor.white}
                text="Get Started"
                onClick={() => navigate(`${path}/subscription/premium`)}
                morph={false}
              />
            </S.Divider>
          </S.Divider>
        </S.Divider>
      </S.Divider>
    </>
  );
};
