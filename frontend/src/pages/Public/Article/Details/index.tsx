import { ArticleInitial, ArticleTable, Roles, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { useAuth } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";
import { cn, getCurrentDate, renderPath } from "../../../../utils";
import Card from "../../../../components/Surfaces/Cards";
import DefaultImage from "../../../../asset/images/default-image.jpg";
import { truncate } from "lodash";

const PublicAritcleDetailsPage: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.user) {
      const path = renderPath(auth?.roles ?? Roles.default);
      navigate(path);
    }
  }, [auth]);

  const article: ArticleTable = ArticleInitial;
  return (
    <>
      <S.Container className={cn("flex justify-center mb-10", ClassName)}>
        <S.Content className="h-full flex flex-col justify-center items-center w-full md:w-11/12 mt-10 ">
          <S.Divider className="w-full">
            <S.Image src={DefaultImage} className="w-full h-[30rem]" />
          </S.Divider>
          <S.Divider className="w-full  flex flex-col">
            <S.Divider className="py-2">
              <S.Span className="text-xl font-semibold">
                {truncate(article?.Title ?? "NA", { length: 100 })}
              </S.Span>
            </S.Divider>
            <S.Divider className="w-full flex md:flex-row felx-col  items-center justify-start mb-4">
              <S.Divider className="flex items-center w-fit">
                <S.Span className="text-sm ">{article.PostedBy}</S.Span>
              </S.Divider>
              <S.Divider className="flex items-center justify-center text-center text-slate-500 w-[10px] ml-3">
                <S.Span className="text-xl font-bold -mt-2">.</S.Span>
              </S.Divider>
              <S.Divider className="flex flex-row items-center w-fit">
                <S.Divider>
                  <S.Span className="text-sm ml-3 text-slate-600">
                    {getCurrentDate(article?.DatePosted)}
                  </S.Span>
                </S.Divider>
              </S.Divider>
            </S.Divider>
            <S.Divider className="flex md:flex-row flex-col gap-10">
              <S.Divider className="w-full md:w-8/12 flex md:flex-row flex-col  items-start justify-start mb-2">
                <S.P className="text-slate-600 text-justify">
                  {article.Description}
                </S.P>
              </S.Divider>
              <S.Divider className="w-full md:w-4/12 flex flex-col  items-center justify-start">
                <S.Divider className="flex items-start justify-start w-full py-2">
                  <S.Span className="text-lg font-medium">
                    Upcoming articles
                  </S.Span>
                </S.Divider>
                <S.Divider className=""></S.Divider>
                <S.Divider className="flex items-center justify-start w-full mt-4">
                  <S.Span
                    className="font-medium text-md cursor-pointer"
                    onClick={() => {
                      alert("fetch more upcoming-articles");
                    }}
                  >
                    Show more...
                  </S.Span>
                </S.Divider>
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(PublicAritcleDetailsPage);
