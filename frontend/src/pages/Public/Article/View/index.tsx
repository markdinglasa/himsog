import { Roles, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { useAuth } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { cn, renderPath } from "../../../../utils";
import Card from "../../../../components/Surfaces/Cards";
import { CustomButton, SelectOption } from "../../../../components";
import AddIcon from "@mui/icons-material/Add";
import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export enum SortBy {
  RECENT = "recent",
  ALL = "all",
}
const PublicArticlePage: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.user) {
      const path = renderPath(auth?.roles ?? Roles.default);
      navigate(path);
    }
  }, [auth]);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.RECENT);
  console.log(sortBy);
  return (
    <>
      <S.Container className={cn("flex justify-center mb-10", ClassName)}>
        <S.Content className="h-full flex flex-col justify-center items-center w-full md:w-11/12 mt-10">
          <S.Divider className="h-32 w-full relative mb-5 items-center justify-center flex bg-white">
            Ads here
          </S.Divider>
          <S.Divider className="border-b flex flex-row justify-between items-center w-full mb-10">
            <S.Divider className="flex flex-row items-center justify-start w-fit gap-2 p-2">
              <S.Span>Sort by</S.Span>
              <SelectOption
                ClassName="bg-white"
                name="EventType"
                options={[
                  { value: SortBy.RECENT, label: SortBy.RECENT },
                  { value: SortBy.ALL, label: SortBy.ALL },
                ]}
                OnChange={setSortBy}
              />
            </S.Divider>
            <S.Divider className="flex flex-row items-center justify-center w-fit gap-2">
              <CustomButton
                text="New"
                leftIcon={<AddIcon className="text-primary md:text-white" />}
              />
            </S.Divider>
          </S.Divider>
          <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
            <Card.Article
              Id={"2"}
              Image={null}
              Title={"Lorem ipsum negoro"}
              Descritpion={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              ScheduleDate={"2025-01-02"}
              onClick={() => {}}
            />
            <Card.Article
              Id={"2"}
              Image={null}
              Title={"Lorem ipsum negoro"}
              Descritpion={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              ScheduleDate={"2025-01-02"}
              onClick={() => {}}
            />
            <Card.Article
              Id={"2"}
              Image={null}
              Title={"Lorem ipsum negoro"}
              Descritpion={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              ScheduleDate={"2025-01-02"}
              onClick={() => {}}
            />
          </S.CardContainer>
          <S.Divider className="w-full flex items-center justify-center pt-5">
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: S.colors.primary, // change background color to the active page
                      color: "white",
                    },
                  }}
                />
              )}
            />
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(PublicArticlePage);
