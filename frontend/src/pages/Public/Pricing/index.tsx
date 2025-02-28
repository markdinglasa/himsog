import { ButtonColor, RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles";
import { cn } from "../../../utils";
import CheckIcon from "@mui/icons-material/Check";
import { CustomButton } from "../../../components";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

const PublicPricingPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container
        className={cn(
          "w-full flex h-full items-center justify-center mb-10",
          ClassName,
        )}
      >
        <S.Content className="w-full md:w-11/12 flex flex-col items-start justify-center">
          <S.Divider className="w-full flex flex-col items-center justify-center mt-10">
            <S.Divider className="flex flex-row text-xl font-medium mb-2">
              <S.Span>Choose your plan</S.Span>
            </S.Divider>
            <S.Divider className="flex flex-row text-sm w-full md:w-1/2">
              <S.Span className="text-slate-600 text-center">
                Get access to personalized meal plans, expert health advice, and
                exclusive wellness resources. Choose a plan that fits your
                lifestyle and start your journey to better health with Himsog!
              </S.Span>
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full flex md:flex-row flex-col items-center justify-center mt-10 gap-10 ">
            <S.Divider className="w-full md:w-5/12 border h-[400px] rounded-md p-5 border-slate-300">
              <S.Divider className=" h-16 py-3 flex items-end justify-start border-b border-slate-300">
                <S.Span className="text-lg font-medium  w-full">
                  Free Plan
                </S.Span>
              </S.Divider>
              <S.Divider className="w-full flex items-center py-3 mt-5">
                <CheckIcon className="" />
                <S.Span className="text-md ml-2 w-full">
                  Browse meal plan
                </S.Span>
              </S.Divider>
              <S.Divider className="w-full flex items-center py-3">
                <CheckIcon className="" />
                <S.Span className="text-md ml-2 w-full">
                  Limited meal plan requests
                </S.Span>
              </S.Divider>
              <S.Divider className="w-full flex items-center py-3">
                <CheckIcon className="" />
                <S.Span className="text-md ml-2 w-full">
                  Access to public health articles
                </S.Span>
              </S.Divider>
              <S.Divider className="w-full flex items-center py-3 mb-5">
                <CheckIcon className="" />
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
                    onClick={() => navigate(RouteChannel.SIGN_IN)}
                  />
                </S.Divider>
              </S.Divider>
            </S.Divider>
            <S.Divider className="w-full md:w-7/12 border h-[400px] rounded-md p-5 bg-primary text-white">
              <S.Divider className=" h-16 py-3 flex items-end justify-start border-b border-slate-300">
                <S.Span className="text-lg font-medium  w-full">
                  Free Plan
                </S.Span>
              </S.Divider>
              <S.Divider className="w-full flex items-center py-3 mt-5">
                <CheckIcon className="" />
                <S.Span className="text-md ml-2 w-full">
                  Access & Browse meal plan
                </S.Span>
              </S.Divider>
              <S.Divider className="w-full flex items-center py-3">
                <CheckIcon className="" />
                <S.Span className="text-md ml-2 w-full">
                  Unlimited customize meal plan requests
                </S.Span>
              </S.Divider>
              <S.Divider className="w-full flex items-center py-3">
                <CheckIcon className="" />
                <S.Span className="text-md ml-2 w-full">
                  Early access to upcoming events & articles
                </S.Span>
              </S.Divider>
              <S.Divider className="w-full flex items-center py-3 mb-5">
                <CheckIcon className="" />
                <S.Span className="text-md ml-2 w-full">
                  Direct consultation to Professional Health cares
                </S.Span>
              </S.Divider>

              <S.Divider className=" h-16 py-3 flex items-center justify-between border-t border-slate-300">
                <S.Divider>
                  <S.Span className="text-lg font-medium  w-full">
                    ₱ 599 /
                  </S.Span>
                  <S.Span className="text-md">month</S.Span>
                </S.Divider>
                <S.Divider>
                  <CustomButton
                    color={ButtonColor.white}
                    text="Get Started"
                    onClick={() => navigate(RouteChannel.SIGN_IN)}
                  />
                </S.Divider>
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(PublicPricingPage);
