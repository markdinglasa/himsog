import { SFC } from "../../../types";
import { cn } from "../../../utils";
import * as S from "../../../styles/Styles";
import { memo, Suspense } from "react";
import { useAuth, useSignOut } from "../../../hooks";
import API from "../../../hooks/api";
import { AccessControl, Skeleton } from "../../../components";
export const HoldPage: SFC = ({ ClassName }) => {
  const { reSignOut } = useSignOut();
  const { auth } = useAuth();
  const { data } = API.Setup.ProfessionValidtion.GetByUser(
    Number(auth?.user ?? 0),
  );
  return (
    <>
      <div
        className={cn(
          "w-full h-[100vh] flex items-center justify-center",
          ClassName,
        )}
      >
        <S.Container className="w-full h-full justify-center items-center flex bg-slate-200 h-screen">
          <S.Main className="grid place-items-center px-6 py-24 sm:py-56 lg:px-8">
            <S.Content className="text-center justify-center flex items-center flex-col">
              <Suspense fallback={<Skeleton />}>
                <AccessControl
                  OtherCondition={Boolean(data?.IsRejected ?? false)}
                >
                  <div className="w-full border-red-400 border-2 rounded-md p-[1rem] bg-red-100">
                    <span className="text-red-500"> {data?.Remarks ?? ""}</span>
                  </div>
                </AccessControl>
              </Suspense>
              <S.P className="text-base font-semibold text-zinc-950"></S.P>
              <S.H1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
                Account Verification
              </S.H1>
              <S.P className="mt-6 text-base leading-7 text-gray-600">
                Please wait 24-48 hours for the account verification to
                complete. Thank you for your patience.
              </S.P>
              <S.Content className="mt-10 flex items-center justify-center gap-x-6">
                <button onClick={reSignOut} className="">
                  Sign Out
                </button>
              </S.Content>
            </S.Content>
          </S.Main>
        </S.Container>
      </div>
    </>
  );
};
export default memo(HoldPage);
