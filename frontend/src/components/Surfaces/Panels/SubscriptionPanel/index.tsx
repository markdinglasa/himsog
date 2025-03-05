import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import { FeedbackEmail, StaticSubscription } from "../../../DataDisplay";
import { useNavigate } from "react-router-dom";

export const SubscriptionPanel: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.Content className="w-full">
          <S.Divider className="flex flex-wrap">
            <S.Span className="text-sm text-slate-600">
              View and manage your subscriptions to keep receiving newsletters,
              product tips, and more. Some subscriptions may not be listed here.
            </S.Span>
            <S.Span
              className="ml-2 text-sm text-blue-600 cursor-pointer"
              onClick={() => navigate(RouteChannel.ABOUT_US)}
            >
              Learn more
            </S.Span>
          </S.Divider>
          <S.Divider>
            <StaticSubscription onClick={() => {}} />
          </S.Divider>
          <S.Divider>
            <FeedbackEmail />
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(SubscriptionPanel);
