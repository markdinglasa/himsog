import { MealPlanTable, SFC } from "../../../types";
import { cn } from "../../../utils";
import * as S from "../../../styles/Styles";
import { InputOption } from "../../Inputs";
import { memo, useEffect, useMemo, useState } from "react";
import API from "../../../hooks/api";
import { Skeleton } from "../../Feedback";
import React from "react";
import Card from "../../Surfaces/Cards";
import { NoRecord } from "../Tables";
import { Pagination, PaginationItem } from "@mui/material";
import Icon from "../../../constants/icon";
import { colors } from "../../../styles/colors";
import { AccessControl } from "..";

export const MealPlans: SFC = ({ ClassName }) => {
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const {
    data: mealplans,
    isLoading,
    refetch,
  } = API.Setup.MealPlan.GetWithFilter(filter, page);

  // Trigger refetch when filter or page changes
  useEffect(() => {
    refetch();
  }, [filter, page, refetch]);

  const count: number = useMemo(
    () => Math.ceil((mealplans?.length || 0) / 30),
    [mealplans],
  );

  return (
    <div className={cn("w-full", ClassName)}>
      <S.Content className="h-full flex flex-col justify-center items-center w-full rounded-md">
        <S.Divider className=" flex md:flex-row flex-col md:justify-between justify-start md:items-center gap-[1rem] w-full mb-[1rem]">
          <S.Divider className="w-full md:w-1/2 flex flex-col items-start justify-start ">
            <S.Span className="text-lg font-medium">Meal Plans</S.Span>
            <S.Span className="text-sm text-slate-600">
              Professionals made meal plans, for your healthy diet.
            </S.Span>
          </S.Divider>
          <S.Divider className="">
            <InputOption
              name="Filter"
              placeholder="Search"
              onChange={(e) => setFilter(e.target.value)}
            />
          </S.Divider>
        </S.Divider>
        <S.Divider className="w-full">
          {isLoading ? (
            <Skeleton />
          ) : mealplans && mealplans?.length > 0 ? (
            <>
              <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full ">
                {mealplans.map((record: MealPlanTable) => {
                  return (
                    <React.Fragment key={record?.Id?.toString()}>
                      <Card.MealPlan Data={record} />
                    </React.Fragment>
                  );
                })}
              </S.CardContainer>
            </>
          ) : (
            <S.Divider className="w-full flex items-center justify-center h-[calc(100vh-18rem)]">
              <NoRecord Message="No Meal Plan" />
            </S.Divider>
          )}
        </S.Divider>
        <AccessControl OtherCondition={count > 0}>
          <S.Divider className="w-full flex items-center justify-end pt-5">
            <Pagination
              count={count}
              onClick={(e) =>
                setPage(Number((e.target as HTMLButtonElement).textContent))
              }
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: Icon.Back, next: Icon.Forward }}
                  {...item}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: colors.primary, // change background color to the active page
                      color: "white",
                    },
                  }}
                />
              )}
            />
          </S.Divider>
        </AccessControl>
      </S.Content>
    </div>
  );
};

export default memo(MealPlans);
